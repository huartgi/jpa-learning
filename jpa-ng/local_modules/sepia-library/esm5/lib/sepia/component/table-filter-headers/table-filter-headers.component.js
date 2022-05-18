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

var TableFilterHeadersComponent = /** @class */ (function () {
    function TableFilterHeadersComponent() {
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
        function (_) {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }

    Object.defineProperty(TableFilterHeadersComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.form.setValue(value);
            try {
                this.onChange(value);
            } catch (e) {
                /** Do nothing with the error */
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var formControls = {};
        this.sortableColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            formControls[column.name] = new FormControl('');
        }));
        this.form = new FormGroup(formControls);
        this.form.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            try {
                _this.onChange(value);
            } catch (e) {
                /** Do nothing with the error */
            }
        }));
    };
    /**
     * @param {?} column
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.sort = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (column.sortable) {
            column.toggleDirection();
            this.sortEvent.emit(column);
        }
    };
    /**
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.form.reset();
        this.clearEvent.emit();
        this.searchEvent.emit();
    };
    /**
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.searchEvent.emit();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.value = value;
        }
        if (value === null) {
            this.form.reset();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} _
     * @return {?}
     */
    TableFilterHeadersComponent.prototype.validate = /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        return this.form.valid ? null : {filters: {valid: false}};
    };
    Object.defineProperty(TableFilterHeadersComponent.prototype, "SvgIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return SvgIcon;
        },
        enumerable: true,
        configurable: true
    });
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
                        function () {
                            return TableFilterHeadersComponent;
                        })),
                        multi: true
                    },
                    {
                        provide: NG_VALIDATORS,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        function () {
                            return TableFilterHeadersComponent;
                        })),
                        multi: true,
                    }
                ],
                styles: [".custom-switch{padding-top:2em}"]
            }]
        }
    ];
    /** @nocollapse */
    TableFilterHeadersComponent.ctorParameters = function () {
        return [];
    };
    TableFilterHeadersComponent.propDecorators = {
        sortableColumns: [{type: Input}],
        actionsWidth: [{type: Input}],
        sortEvent: [{type: Output}],
        searchEvent: [{type: Output}],
        clearEvent: [{type: Output}]
    };
    return TableFilterHeadersComponent;
}());
export {TableFilterHeadersComponent};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvdGFibGUtZmlsdGVyLWhlYWRlcnMvdGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsYUFBYSxFQUNiLGlCQUFpQixFQUVsQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBRXhGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QztJQWdERTtRQTVCUyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQzdFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7UUFDeEMsYUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQztRQUN4QyxpQkFBWSxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQztRQUNqRCxxQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFFNUMsYUFBUTs7OztRQUFRLFVBQUMsQ0FBTTtRQUN2QixDQUFDLEVBQUM7UUFDRixjQUFTOzs7UUFBUTtRQUNqQixDQUFDLEVBQUM7SUFnQkYsQ0FBQztJQWRELHNCQUFJLDhDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFLO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSTtnQkFDRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsZ0NBQWdDO2FBQ2pDO1FBQ0gsQ0FBQzs7O09BVEE7Ozs7SUFjRCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkFlQzs7WUFkTyxZQUFZLEdBQUcsRUFBRTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDakMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNwQyxJQUFJO2dCQUNGLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixnQ0FBZ0M7YUFDakM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMENBQUk7Ozs7SUFBSixVQUFLLE1BQXNCO1FBRXpCLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNuQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsMkNBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELDRDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwrREFBeUI7Ozs7SUFBekIsVUFBMEIsRUFBYztJQUN4QyxDQUFDOzs7OztJQUVELGdEQUFVOzs7O0lBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7UUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNuQjtJQUNILENBQUM7Ozs7O0lBRUQsc0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCx1REFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELDhDQUFROzs7O0lBQVIsVUFBUyxDQUFjO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLEVBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsc0JBQUksZ0RBQU87Ozs7UUFBWDtZQUNFLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUM7OztPQUFBOztnQkFqSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDg3RkFBb0Q7b0JBRXBELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSwyQkFBMkIsRUFBM0IsQ0FBMkIsRUFBQzs0QkFDMUQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixFQUFDOzRCQUMxRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7O2tDQUdFLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTs7SUEyRlQsa0NBQUM7Q0FBQSxBQWxIRCxJQWtIQztTQWpHWSwyQkFBMkI7OztJQUV0QyxzREFBZ0Q7O0lBQ2hELG1EQUE4Qjs7SUFDOUIsZ0RBQXVGOztJQUN2RixrREFBMkM7O0lBQzNDLGlEQUEwQzs7SUFDMUMsZ0RBQTJDOztJQUMzQywrQ0FBd0M7O0lBQ3hDLCtDQUF3Qzs7SUFDeEMsbURBQWlEOztJQUNqRCx1REFBNEM7O0lBQzVDLDJDQUFnQjs7SUFDaEIsK0NBQ0U7O0lBQ0YsZ0RBQ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0b3Jcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGaWx0ZXJJbnB1dFR5cGVFbnVtfSBmcm9tICcuLi8uLi9tb2RlbC9zZWFyY2gvZmlsdGVyaW5nL2ZpbHRlci1pbnB1dC10eXBlLmVudW0nO1xuaW1wb3J0IHtTb3J0YWJsZUNvbHVtbn0gZnJvbSAnLi4vLi4vbW9kZWwvc2VhcmNoL3NvcnRpbmcvc29ydGFibGUtY29sdW1uJztcbmltcG9ydCB7U29ydGluZ0RpcmVjdGlvbkVudW19IGZyb20gJy4uLy4uL21vZGVsL3NlYXJjaC9zb3J0aW5nL3NvcnRpbmctZGlyZWN0aW9uLmVudW0nO1xuaW1wb3J0IHtTdmdJY29ufSBmcm9tICcuLi9zdmcvc3ZnLWljb24uZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlcGlhLXRhYmxlLWZpbHRlci1oZWFkZXJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLWZpbHRlci1oZWFkZXJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUtZmlsdGVyLWhlYWRlcnMuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWJsZUZpbHRlckhlYWRlcnNDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWJsZUZpbHRlckhlYWRlcnNDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVySGVhZGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XG5cbiAgQElucHV0KCkgc29ydGFibGVDb2x1bW5zOiBBcnJheTxTb3J0YWJsZUNvbHVtbj47XG4gIEBJbnB1dCgpIGFjdGlvbnNXaWR0aCA9ICcxMCUnO1xuICBAT3V0cHV0KCkgc29ydEV2ZW50OiBFdmVudEVtaXR0ZXI8U29ydGFibGVDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0YWJsZUNvbHVtbj4oKTtcbiAgQE91dHB1dCgpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgaW5wdXRUZXh0ID0gRmlsdGVySW5wdXRUeXBlRW51bS5JTlBVVF9URVhUO1xuICBkcm9wZG93biA9IEZpbHRlcklucHV0VHlwZUVudW0uRFJPUERPV047XG4gIGNoZWNrYm94ID0gRmlsdGVySW5wdXRUeXBlRW51bS5DSEVDS0JPWDtcbiAgcmFkaW9idXR0b25zID0gRmlsdGVySW5wdXRUeXBlRW51bS5SQURJT19CVVRUT05TO1xuICBhc2NTb3J0RGlyZWN0aW9uID0gU29ydGluZ0RpcmVjdGlvbkVudW0uQVNDO1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIG9uQ2hhbmdlOiBhbnkgPSAoXzogYW55KSA9PiB7XG4gIH07XG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge1xuICB9O1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5mb3JtLnNldFZhbHVlKHZhbHVlKTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyoqIERvIG5vdGhpbmcgd2l0aCB0aGUgZXJyb3IgKi9cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGZvcm1Db250cm9scyA9IHt9O1xuICAgIHRoaXMuc29ydGFibGVDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgIGZvcm1Db250cm9sc1tjb2x1bW4ubmFtZV0gPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICAgIH0pO1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoZm9ybUNvbnRyb2xzKTtcblxuXG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8qKiBEbyBub3RoaW5nIHdpdGggdGhlIGVycm9yICovXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzb3J0KGNvbHVtbjogU29ydGFibGVDb2x1bW4pOiB2b2lkIHtcblxuICAgIGlmIChjb2x1bW4uc29ydGFibGUpIHtcbiAgICAgIGNvbHVtbi50b2dnbGVEaXJlY3Rpb24oKTtcbiAgICAgIHRoaXMuc29ydEV2ZW50LmVtaXQoY29sdW1uKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB0aGlzLmNsZWFyRXZlbnQuZW1pdCgpO1xuICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoRXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHZhbGlkYXRlKF86IEZvcm1Db250cm9sKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZCA/IG51bGwgOiB7ZmlsdGVyczoge3ZhbGlkOiBmYWxzZX19O1xuICB9XG5cbiAgZ2V0IFN2Z0ljb24oKSB7XG4gICAgcmV0dXJuIFN2Z0ljb247XG4gIH1cbn1cbiJdfQ==
