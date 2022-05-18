import * as ɵngcc0 from '@angular/core';
import {EventEmitter, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, Validator} from '@angular/forms';
import {FilterInputTypeEnum} from '../../model/search/filtering/filter-input-type.enum';
import {SortableColumn} from '../../model/search/sorting/sortable-column';
import {SortingDirectionEnum} from '../../model/search/sorting/sorting-direction.enum';
import {SvgIcon} from '../svg/svg-icon.enum';

export declare class TableFilterHeadersComponent implements OnInit, ControlValueAccessor, Validator {
    sortableColumns: Array<SortableColumn>;
    actionsWidth: string;
    sortEvent: EventEmitter<SortableColumn>;
    searchEvent: EventEmitter<any>;
    clearEvent: EventEmitter<any>;
    inputText: FilterInputTypeEnum;
    dropdown: FilterInputTypeEnum;
    checkbox: FilterInputTypeEnum;
    radiobuttons: FilterInputTypeEnum;
    ascSortDirection: SortingDirectionEnum;
    form: FormGroup;
    onChange: any;
    onTouched: any;
    value: any;

    constructor();

    ngOnInit(): void;

    sort(column: SortableColumn): void;

    clear(): void;

    search(): void;

    registerOnValidatorChange(fn: () => void): void;

    writeValue(value: any): void;

    registerOnChange(fn: any): void;

    registerOnTouched(fn: any): void;

    validate(_: FormControl): {
        filters: {
            valid: boolean;
        };
    };

    readonly SvgIcon: typeof SvgIcon;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableFilterHeadersComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableFilterHeadersComponent, "sepia-table-filter-headers", never, { "actionsWidth": "actionsWidth"; "sortableColumns": "sortableColumns"; }, { "sortEvent": "sortEvent"; "searchEvent": "searchEvent"; "clearEvent": "clearEvent"; }, never, never>;
}

//# sourceMappingURL=table-filter-headers.component.d.ts.map
