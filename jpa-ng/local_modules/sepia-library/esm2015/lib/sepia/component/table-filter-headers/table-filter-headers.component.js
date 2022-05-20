/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/table-filter-headers/table-filter-headers.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FilterInputTypeEnum} from '../../model/search/filtering/filter-input-type.enum';
import {SortingDirectionEnum} from '../../model/search/sorting/sorting-direction.enum';
import {SvgIcon} from '../svg/svg-icon.enum';

export class TableFilterHeadersComponent {
    constructor() {
        this.actionsWidth = '10%';
        this.sortEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.clearEvent = new EventEmitter();
        this.inputText = FilterInputTypeEnum.INPUT_TEXT;
        this.dropdown = FilterInputTypeEnum.DROPDOWN;
        this.checkbox = FilterInputTypeEnum.CHECKBOX;
        this.radiobuttons = FilterInputTypeEnum.RADIO_BUTTONS;
        this.ascSortDirection = SortingDirectionEnum.ASC;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
            (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
            () => {
        });
    }

    /**
     * @return {?}
     */
    get value() {
        return this.form.value;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.form.setValue(value);
        try {
            this.onChange(value);
        } catch (e) {
            /** Do nothing with the error */
        }
    }

    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const formControls = {};
        this.sortableColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
            column => {
            formControls[column.name] = new FormControl('');
        }));
        this.form = new FormGroup(formControls);
        this.form.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
            value => {
            try {
                this.onChange(value);
            } catch (e) {
                /** Do nothing with the error */
            }
        }));
    }

    /**
     * @param {?} column
     * @return {?}
     */
    sort(column) {
        if (column.sortable) {
            column.toggleDirection();
            this.sortEvent.emit(column);
        }
    }

    /**
     * @return {?}
     */
    clear() {
        this.form.reset();
        this.clearEvent.emit();
        this.searchEvent.emit();
    }

    /**
     * @return {?}
     */
    search() {
        this.searchEvent.emit();
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
    }

    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.value = value;
        }
        if (value === null) {
            this.form.reset();
        }
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }

    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    /**
     * @param {?} _
     * @return {?}
     */
    validate(_) {
        return this.form.valid ? null : {filters: {valid: false}};
    }

    /**
     * @return {?}
     */
    get SvgIcon() {
        return SvgIcon;
    }
}

TableFilterHeadersComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'sepia-table-filter-headers',
            template: "  <tr class=\"\" [formGroup]=\"form\">\n    <th\n      scope=\"col\" *ngFor=\"let column of sortableColumns\"\n      [className]=\"column.bootstrapClass\"\n      [style.width]=\"column.width\"\n    >\n      <div [id]=\"'sortBY' + column.name\" class=\"row\" [ngClass]=\"{ 'clickable': column.sortable }\"\n           (click)=\"sort(column)\">\n        <span class=\"col-md-12\" *ngIf=\"column.filterInputType != checkbox\">\n        {{ (column.title | translate) }}\n          <span *ngIf=\"column.direction != null\">\n            <span *ngIf=\"column.direction === ascSortDirection; then sortAscending else sortDescending\"></span>\n          </span>\n        </span>\n      </div>\n      <input (keyup.enter)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === inputText\" type=\"text\" class=\"form-control\" [id]=\"column.name\">\n      <select (change)=\"search()\" [formControlName]=\"column.name\" *ngIf=\"column.filterInputType === dropdown\" class=\"form-control\" [id]=\"column.name\">\n        <option></option>\n        <option *ngFor=\"let elem of column.values\" [value]=\"elem.value\">{{ (elem.key| translate) }}</option>\n      </select>\n      <div class=\"custom-control custom-switch\" *ngIf=\"column.filterInputType === checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" [formControlName]=\"column.name\" [id]=\"column.name\">\n        <label class=\"custom-control-label\" [htmlFor]=\"column.name\">{{ (column.title | translate) }}</label>\n      </div>\n      <div class=\"btn-group btn-group-toggle btn-group-sm criteria-value\"\n           *ngIf=\"column.filterInputType === radiobuttons\">\n        <label *ngFor=\"let elem of column.values\" [id]=\"'elem-'+ elem.key\"\n               [ngClass]=\"{'active' : form.controls[column.name].value === elem.key }\" class=\"btn btn-secondary\">\n          <input [formControlName]=\"column.name\" type=\"radio\" [value]=\"elem.key\">{{ elem.value }}\n        </label>\n      </div>\n    </th>\n    <th scope=\"col\" [style.width]=\"actionsWidth\">\n      <div class=\"float-right row d-inline-block\">\n        <button id=\"headerSearchButton\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"search()\"\n                style=\"margin-top: 24px; max-width: 40px!important;\">\n          <sepia-svg-icon [type]=\"SvgIcon.SEARCH\"></sepia-svg-icon>\n        </button>\n        <button id=\"headerClearButton\" type=\"button\"\n                style=\"margin-left: 10px; margin-top: 24px; max-width: 40px!important;\"\n                class=\"btn btn-outline-primary\" (click)=\"clear()\">\n          <sepia-svg-icon [type]=\"SvgIcon.X_CIRCLE\"></sepia-svg-icon>\n        </button>\n      </div>\n    </th>\n  </tr>\n\n  <ng-template #sortDescending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_DOWN\"></sepia-svg-icon>\n  </ng-template>\n\n  <ng-template #sortAscending>\n    <sepia-svg-icon [type]=\"SvgIcon.ARROW_UP\"></sepia-svg-icon>\n  </ng-template>\n",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef((/**
                     * @return {?}
                     */
                        () => TableFilterHeadersComponent)),
                    multi: true
                },
                {
                    provide: NG_VALIDATORS,
                    useExisting: forwardRef((/**
                     * @return {?}
                     */
                        () => TableFilterHeadersComponent)),
                    multi: true,
                }
            ],
            styles: [".custom-switch{padding-top:2em}"]
        }]
    }
];
/** @nocollapse */
TableFilterHeadersComponent.ctorParameters = () => [];
TableFilterHeadersComponent.propDecorators = {
    sortableColumns: [{type: Input}],
    actionsWidth: [{type: Input}],
    sortEvent: [{type: Output}],
    searchEvent: [{type: Output}],
    clearEvent: [{type: Output}]
};
if (false) {
    /** @type {?} */
    TableFilterHeadersComponent.prototype.sortableColumns;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.actionsWidth;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.sortEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.searchEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.clearEvent;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.inputText;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.dropdown;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.checkbox;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.radiobuttons;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.ascSortDirection;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.form;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.onChange;
    /** @type {?} */
    TableFilterHeadersComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvdGFibGUtZmlsdGVyLWhlYWRlcnMvdGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGlCQUFpQixFQUVsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBRXhGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQW1CN0MsTUFBTSxPQUFPLDJCQUEyQjtJQStCdEM7UUE1QlMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUM3RSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztRQUMzQyxhQUFRLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7UUFDeEMsaUJBQVksR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUM7UUFDakQscUJBQWdCLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDO1FBRTVDLGFBQVE7Ozs7UUFBUSxDQUFDLENBQU0sRUFBRSxFQUFFO1FB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QUFDLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixFQUFDO3dCQUMxRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBQzt3QkFDMUQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7OzhCQUdFLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxNQUFNOzBCQUNOLE1BQU07eUJBQ04sTUFBTTs7OztJQUpQLHNEQUFnRDs7SUFDaEQsbURBQThCOztJQUM5QixnREFBdUY7O0lBQ3ZGLGtEQUEyQzs7SUFDM0MsaURBQTBDOztJQUMxQyxnREFBMkM7O0lBQzNDLCtDQUF3Qzs7SUFDeEMsK0NBQXdDOztJQUN4QyxtREFBaUQ7O0lBQ2pELHVEQUE0Qzs7SUFDNUMsMkNBQWdCOztJQUNoQiwrQ0FDRTs7SUFDRixnREFDRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgTkdfVkFMSURBVE9SUyxcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIFZhbGlkYXRvclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0ZpbHRlcklucHV0VHlwZUVudW19IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC9maWx0ZXJpbmcvZmlsdGVyLWlucHV0LXR5cGUuZW51bSc7XG5pbXBvcnQge1NvcnRhYmxlQ29sdW1ufSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gvc29ydGluZy9zb3J0YWJsZS1jb2x1bW4nO1xuaW1wb3J0IHtTb3J0aW5nRGlyZWN0aW9uRW51bX0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoL3NvcnRpbmcvc29ydGluZy1kaXJlY3Rpb24uZW51bSc7XG5pbXBvcnQge1N2Z0ljb259IGZyb20gJy4uL3N2Zy9zdmctaWNvbi5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VwaWEtdGFibGUtZmlsdGVyLWhlYWRlcnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1maWx0ZXItaGVhZGVycy5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhYmxlRmlsdGVySGVhZGVyc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhYmxlRmlsdGVySGVhZGVyc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJIZWFkZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcblxuICBASW5wdXQoKSBzb3J0YWJsZUNvbHVtbnM6IEFycmF5PFNvcnRhYmxlQ29sdW1uPjtcbiAgQElucHV0KCkgYWN0aW9uc1dpZHRoID0gJzEwJSc7XG4gIEBPdXRwdXQoKSBzb3J0RXZlbnQ6IEV2ZW50RW1pdHRlcjxTb3J0YWJsZUNvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRhYmxlQ29sdW1uPigpO1xuICBAT3V0cHV0KCkgc2VhcmNoRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbGVhckV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBpbnB1dFRleHQgPSBGaWx0ZXJJbnB1dFR5cGVFbnVtLklOUFVUX1RFWFQ7XG4gIGRyb3Bkb3duID0gRmlsdGVySW5wdXRUeXBlRW51bS5EUk9QRE9XTjtcbiAgY2hlY2tib3ggPSBGaWx0ZXJJbnB1dFR5cGVFbnVtLkNIRUNLQk9YO1xuICByYWRpb2J1dHRvbnMgPSBGaWx0ZXJJbnB1dFR5cGVFbnVtLlJBRElPX0JVVFRPTlM7XG4gIGFzY1NvcnREaXJlY3Rpb24gPSBTb3J0aW5nRGlyZWN0aW9uRW51bS5BU0M7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgb25DaGFuZ2U6IGFueSA9IChfOiBhbnkpID0+IHtcbiAgfTtcbiAgb25Ub3VjaGVkOiBhbnkgPSAoKSA9PiB7XG4gIH07XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm0udmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmZvcm0uc2V0VmFsdWUodmFsdWUpO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiogRG8gbm90aGluZyB3aXRoIHRoZSBlcnJvciAqL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZm9ybUNvbnRyb2xzID0ge307XG4gICAgdGhpcy5zb3J0YWJsZUNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgZm9ybUNvbnRyb2xzW2NvbHVtbi5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cChmb3JtQ29udHJvbHMpO1xuXG5cbiAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLyoqIERvIG5vdGhpbmcgd2l0aCB0aGUgZXJyb3IgKi9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNvcnQoY29sdW1uOiBTb3J0YWJsZUNvbHVtbik6IHZvaWQge1xuXG4gICAgaWYgKGNvbHVtbi5zb3J0YWJsZSkge1xuICAgICAgY29sdW1uLnRvZ2dsZURpcmVjdGlvbigpO1xuICAgICAgdGhpcy5zb3J0RXZlbnQuZW1pdChjb2x1bW4pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgIHRoaXMuY2xlYXJFdmVudC5lbWl0KCk7XG4gICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KCk7XG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hFdmVudC5lbWl0KCk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgdmFsaWRhdGUoXzogRm9ybUNvbnRyb2wpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbGlkID8gbnVsbCA6IHtmaWx0ZXJzOiB7dmFsaWQ6IGZhbHNlfX07XG4gIH1cblxuICBnZXQgU3ZnSWNvbigpIHtcbiAgICByZXR1cm4gU3ZnSWNvbjtcbiAgfVxufVxuIl19
