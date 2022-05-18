/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/enum-to-array.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Pipe} from '@angular/core';

var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }

    /**
     * @param {?} value
     * @return {?}
     */
    EnumToArrayPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Object.keys(value).map((/**
         * @param {?} o
         * @return {?}
         */
        function (o) {
            return {index: +o, name: value[o]};
        }));
    };
    EnumToArrayPipe.decorators = [
        {type: Pipe, args: [{name: 'enumToArray'},]}
    ];
    return EnumToArrayPipe;
}());
export {EnumToArrayPipe};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS10by1hcnJheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9waXBlL2VudW0tdG8tYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWxEO0lBQUE7SUFPQSxDQUFDOzs7OztJQUxDLG1DQUFTOzs7O0lBQVQsVUFBVSxLQUFLO1FBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUM7WUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFORixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDOztJQU8zQixzQkFBQztDQUFBLEFBUEQsSUFPQztTQU5ZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ2VudW1Ub0FycmF5J30pXG5leHBvcnQgY2xhc3MgRW51bVRvQXJyYXlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZSk6IGFueSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5tYXAobyA9PiB7XG4gICAgICByZXR1cm4ge2luZGV4OiArbywgbmFtZTogdmFsdWVbb119O1xuICAgIH0pO1xuICB9XG59XG4iXX0=
