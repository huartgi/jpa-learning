import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {FilterInputTypeEnum, Pagination, SortableColumn, SortingDirectionEnum, SortingService} from 'sepia-library';
import {User} from '../model/user';
import {UserCriteria} from '../service/user-criteria';
import {UserProperties} from '../service/user-properties.enum';
import {UserService} from '../service/user.service';

export abstract class AbstractSearchUser {

    form: FormGroup;

    /** Columns of the search table */
    sortableColumns: Array<SortableColumn>;
    sortableColumns$: Observable<Array<SortableColumn>>;
    /** The persons matching the criterias from the search */
    personsFound$ = new BehaviorSubject<User[]>(null);

    /** Pagination infos */
    pagination = new Pagination();

    protected constructor(
        protected formBuilder: FormBuilder,
        protected personService: UserService,
        protected sortingService: SortingService) {
    }

    initForm() {
        this.form = this.formBuilder.group({
            filters: []
        });
    }

    initSortableColumns() {
        this.sortableColumns = [
            new SortableColumn(UserProperties.CODE, 'user.code', null, 'col-md-2',
                FilterInputTypeEnum.INPUT_TEXT, null),
            new SortableColumn(UserProperties.FIRSTNAME, 'user.firstName', null, 'col-md-2',
                FilterInputTypeEnum.INPUT_TEXT, null),
            new SortableColumn(UserProperties.LASTNAME, 'user.lastName', SortingDirectionEnum.ASC, 'col-md-2',
                FilterInputTypeEnum.INPUT_TEXT, null),
            new SortableColumn(UserProperties.EMAIL, 'Email', SortingDirectionEnum.ASC, 'col-md-4',
                FilterInputTypeEnum.INPUT_TEXT, null)
        ];
        this.sortableColumns$ = of(this.sortableColumns);
    }

    doSearch() {
        this.pagination.currentPage = 1;
        this.searchPersons();
        this.countPersons();
    }

    paginate(nextPage: number) {
        this.pagination.currentPage = nextPage;
        this.searchPersons();
    }

    sort(sortableColumn: SortableColumn): void {
        this.sortingService.clearPreviousSorting(sortableColumn, this.sortableColumns);
        this.pagination.currentPage = 1;
        this.searchPersons();
    }

    abstract selectUser(user: User);

    private searchPersons() {
        this.personService.findByCriteria(this.getCriteria()).subscribe(data => this.personsFound$.next(data));
    }

    private countPersons() {
        this.personService.countByCriteria(this.getCriteria()).subscribe(count => this.pagination.totalResult = count);
    }

    private getCriteria(): UserCriteria {
        const criteria = new UserCriteria();
        if (this.form.value.filters) {
            criteria.code = this.form.value.filters[UserProperties.CODE];
            criteria.firstName = this.form.value.filters[UserProperties.FIRSTNAME];
            criteria.lastName = this.form.value.filters[UserProperties.LASTNAME];
            criteria.email = this.form.value.filters[UserProperties.EMAIL];
        }
        const column = this.sortingService.getSortableColumn(this.sortableColumns);
        criteria.sorting = {
            property: column.name,
            direction: column.direction
        };
        criteria.paging = {
            firstResult: this.pagination.getFirstResult(),
            pageSize: this.pagination.pageSize
        };
        return criteria;
    }


}
