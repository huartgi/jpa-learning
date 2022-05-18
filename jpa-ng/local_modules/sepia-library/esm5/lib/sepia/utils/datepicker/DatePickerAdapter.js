/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerAdapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
import {Injectable} from '@angular/core';
import {NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';

var DatePickerAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(DatePickerAdapter, _super);

    function DatePickerAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DELIMITER = '/';
        return _this;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerAdapter.prototype.fromModel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerAdapter.prototype.toModel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? value.day.toString().padStart(2, '0') + this.DELIMITER + value.month.toString().padStart(2, '0') + this.DELIMITER + value.year : '';
    };
    DatePickerAdapter.decorators = [
        {type: Injectable}
    ];
    return DatePickerAdapter;
}(NgbDateAdapter));
export {DatePickerAdapter};
if (false) {
    /** @type {?} */
    DatePickerAdapter.prototype.DELIMITER;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlckFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL3V0aWxzL2RhdGVwaWNrZXIvRGF0ZVBpY2tlckFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBRXpFO0lBQ3VDLDZDQUFzQjtJQUQ3RDtRQUFBLHFFQW9CQztRQWpCVSxlQUFTLEdBQUcsR0FBRyxDQUFDOztJQWlCM0IsQ0FBQzs7Ozs7SUFmQyxxQ0FBUzs7OztJQUFULFVBQVUsS0FBb0I7UUFDNUIsSUFBSSxLQUFLLEVBQUU7O2dCQUNILElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEMsT0FBTztnQkFDTCxHQUFHLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNCLEtBQUssRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQzdCLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsS0FBMkI7UUFDakMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0SixDQUFDOztnQkFuQkYsVUFBVTs7SUFvQlgsd0JBQUM7Q0FBQSxBQXBCRCxDQUN1QyxjQUFjLEdBbUJwRDtTQW5CWSxpQkFBaUI7OztJQUU1QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgU2VydmljZSBoYW5kbGVzIGhvdyB0aGUgZGF0ZSBpcyByZXByZXNlbnRlZCBpbiBzY3JpcHRzIGkuZS4gbmdNb2RlbC5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZUFkYXB0ZXIsIE5nYkRhdGVTdHJ1Y3R9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZUFkYXB0ZXI8c3RyaW5nPiB7XG5cbiAgcmVhZG9ubHkgREVMSU1JVEVSID0gJy8nO1xuXG4gIGZyb21Nb2RlbCh2YWx1ZTogc3RyaW5nIHwgbnVsbCk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSB2YWx1ZS5zcGxpdCh0aGlzLkRFTElNSVRFUik7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXkgOiBwYXJzZUludChkYXRlWzBdLCAxMCksXG4gICAgICAgIG1vbnRoIDogcGFyc2VJbnQoZGF0ZVsxXSwgMTApLFxuICAgICAgICB5ZWFyIDogcGFyc2VJbnQoZGF0ZVsyXSwgMTApXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRvTW9kZWwodmFsdWU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUuZGF5LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSAgKyB0aGlzLkRFTElNSVRFUiArIHZhbHVlLm1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArIHRoaXMuREVMSU1JVEVSICsgdmFsdWUueWVhciA6ICcnO1xuICB9XG59XG4iXX0=
