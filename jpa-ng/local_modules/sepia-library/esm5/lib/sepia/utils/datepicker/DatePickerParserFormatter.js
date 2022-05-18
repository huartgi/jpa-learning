/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerParserFormatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
import {Injectable} from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

var DatePickerParserFormatter = /** @class */ (function (_super) {
    tslib_1.__extends(DatePickerParserFormatter, _super);

    function DatePickerParserFormatter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DELIMITER = '/';
        return _this;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerParserFormatter.prototype.parse = /**
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
     * @param {?} date
     * @return {?}
     */
    DatePickerParserFormatter.prototype.format = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? date.day.toString().padStart(2, '0') + this.DELIMITER + date.month.toString().padStart(2, '0') + this.DELIMITER + date.year : '';
    };
    DatePickerParserFormatter.decorators = [
        {type: Injectable}
    ];
    return DatePickerParserFormatter;
}(NgbDateParserFormatter));
export {DatePickerParserFormatter};
if (false) {
    /** @type {?} */
    DatePickerParserFormatter.prototype.DELIMITER;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlclBhcnNlckZvcm1hdHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvdXRpbHMvZGF0ZXBpY2tlci9EYXRlUGlja2VyUGFyc2VyRm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLHNCQUFzQixFQUFnQixNQUFNLDRCQUE0QixDQUFDO0FBRWpGO0lBQytDLHFEQUFzQjtJQURyRTtRQUFBLHFFQXFCQztRQWxCVSxlQUFTLEdBQUcsR0FBRyxDQUFDOztJQWtCM0IsQ0FBQzs7Ozs7SUFoQkMseUNBQUs7Ozs7SUFBTCxVQUFNLEtBQWE7UUFDakIsSUFBSSxLQUFLLEVBQUU7O2dCQUNILElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDeEMsT0FBTztnQkFDTCxHQUFHLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNCLEtBQUssRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQzdCLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCwwQ0FBTTs7OztJQUFOLFVBQU8sSUFBMEI7UUFFL0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNsSixDQUFDOztnQkFwQkYsVUFBVTs7SUFxQlgsZ0NBQUM7Q0FBQSxBQXJCRCxDQUMrQyxzQkFBc0IsR0FvQnBFO1NBcEJZLHlCQUF5Qjs7O0lBRXBDLDhDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBTZXJ2aWNlIGhhbmRsZXMgaG93IHRoZSBkYXRlIGlzIHJlbmRlcmVkIGFuZCBwYXJzZWQgZnJvbSBrZXlib2FyZCBpLmUuIGluIHRoZSBib3VuZCBpbnB1dCBmaWVsZC5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZVBhcnNlckZvcm1hdHRlciwgTmdiRGF0ZVN0cnVjdH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlclBhcnNlckZvcm1hdHRlciBleHRlbmRzIE5nYkRhdGVQYXJzZXJGb3JtYXR0ZXIge1xuXG4gIHJlYWRvbmx5IERFTElNSVRFUiA9ICcvJztcblxuICBwYXJzZSh2YWx1ZTogc3RyaW5nKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IHZhbHVlLnNwbGl0KHRoaXMuREVMSU1JVEVSKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRheSA6IHBhcnNlSW50KGRhdGVbMF0sIDEwKSxcbiAgICAgICAgbW9udGggOiBwYXJzZUludChkYXRlWzFdLCAxMCksXG4gICAgICAgIHllYXIgOiBwYXJzZUludChkYXRlWzJdLCAxMClcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogc3RyaW5nIHtcblxuICAgIHJldHVybiBkYXRlID8gZGF0ZS5kYXkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpICArIHRoaXMuREVMSU1JVEVSICsgZGF0ZS5tb250aC50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykgKyB0aGlzLkRFTElNSVRFUiArIGRhdGUueWVhciA6ICcnO1xuICB9XG59XG4iXX0=
