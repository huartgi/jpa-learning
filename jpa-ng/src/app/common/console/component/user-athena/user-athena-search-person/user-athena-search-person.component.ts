import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SortingService} from 'sepia-library';
import {AbstractSearchUser} from '../../../../user/component/abstract-search-user';
import {User} from '../../../../user/model/user';
import {UserProperties} from '../../../../user/service/user-properties.enum';
import {UserService} from '../../../../user/service/user.service';

@Component({
    selector: 'app-user-athena-search-person',
    templateUrl: './user-athena-search-person.component.html',
    styleUrls: ['./user-athena-search-person.component.scss']
})
export class UserAthenaSearchPersonComponent extends AbstractSearchUser implements OnInit {

    @Output() headerClickedEmitter = new EventEmitter();
    @Output() personSelectedEmitter = new EventEmitter<User>();

    constructor(protected formBuilder: FormBuilder,
                protected personService: UserService,
                protected sortingService: SortingService) {
        super(formBuilder, personService, sortingService);
    }

    ngOnInit() {
        super.initForm();
        super.initSortableColumns();
    }

    selectUser(person: User) {
        this.personSelectedEmitter.emit(person);
    }

    headerClick() {
        this.headerClickedEmitter.emit();
        setTimeout(() => {
            document.getElementById(UserProperties.CODE).focus();
        });
    }
}
