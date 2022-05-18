/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/DateUtils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }

    /**
     * @param {?} value
     * @return {?}
     */
    DateUtils.toDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            /** @type {?} */
            var dateString = value.split('/');
            /** @type {?} */
            var date = new Date(parseInt(dateString[2], 10), parseInt(dateString[1], 10) - 1, parseInt(dateString[0], 10));
            if (isNaN(date.getTime())) {
                return undefined;
            } else {
                return date;
            }
        } else {
            return undefined;
        }
    };
    return DateUtils;
}());
export {DateUtils};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS91dGlscy9EYXRlVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO0lBY0EsQ0FBQzs7Ozs7SUFiUSxnQkFBTTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixJQUFJLEtBQUssRUFBRTs7Z0JBQ0gsVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztnQkFDN0IsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoSCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtnQkFDekIsT0FBTyxTQUFTLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERhdGVVdGlscyB7XG4gIHN0YXRpYyB0b0RhdGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocGFyc2VJbnQoZGF0ZVN0cmluZ1syXSwgMTApLCBwYXJzZUludChkYXRlU3RyaW5nWzFdLCAxMCkgLSAxLCBwYXJzZUludChkYXRlU3RyaW5nWzBdLCAxMCkpO1xuICAgICAgaWYgKGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=
