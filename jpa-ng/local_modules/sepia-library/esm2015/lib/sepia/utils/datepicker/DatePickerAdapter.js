/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerAdapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
import {Injectable} from '@angular/core';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

export class DatePickerAdapter extends NgbDateAdapter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }

    /**
     * @param {?} value
     * @return {?}
     */
    fromModel(value) {
        if (value) {
            /** @type {?} */
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    toModel(value) {
        return value ? value.day.toString().padStart(2, '0') + this.DELIMITER + value.month.toString().padStart(2, '0') + this.DELIMITER + value.year : '';
    }
}

DatePickerAdapter.decorators = [
    {type: Injectable}
];
if (false) {
    /** @type {?} */
    DatePickerAdapter.prototype.DELIMITER;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlckFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL3V0aWxzL2RhdGVwaWNrZXIvRGF0ZVBpY2tlckFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxjQUFjLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFHekUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGNBQXNCO0lBRDdEOztRQUdXLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFpQjNCLENBQUM7Ozs7O0lBZkMsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksS0FBSyxFQUFFOztrQkFDSCxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hDLE9BQU87Z0JBQ0wsR0FBRyxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMzQixLQUFLLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdCLElBQUksRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUM3QixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQTJCO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEosQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7SUFHVCxzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU2VydmljZSBoYW5kbGVzIGhvdyB0aGUgZGF0ZSBpcyByZXByZXNlbnRlZCBpbiBzY3JpcHRzIGkuZS4gbmdNb2RlbC5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVTdHJ1Y3R9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZUFkYXB0ZXI8c3RyaW5nPiB7XG5cbiAgcmVhZG9ubHkgREVMSU1JVEVSID0gJy8nO1xuXG4gIGZyb21Nb2RlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXkgOiBwYXJzZUludChkYXRlWzBdLCAxMCksXG4gICAgICAgIG1vbnRoIDogcGFyc2VJbnQoZGF0ZVsxXSwgMTApLFxuICAgICAgICB5ZWFyIDogcGFyc2VJbnQoZGF0ZVsyXSwgMTApXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvTW9kZWwodmFsdWU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUuZGF5LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSAgKyB0aGlzLkRFTElNSVRFUiArIHZhbHVlLm1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArIHRoaXMuREVMSU1JVEVSICsgdmFsdWUueWVhciA6ICcnO1xuICB9XG59XG4iXX0=
