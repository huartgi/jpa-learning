/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/boolean.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Pipe} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

var BooleanPipe = /** @class */ (function () {
    function BooleanPipe(translate) {
        this.translate = translate;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    BooleanPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === undefined || value === null) {
            return '';
        } else {
            if (value === true) {
                return this.translate.get('common.values.yes');
            } else {
                return this.translate.get('common.values.no');
            }
        }
    };
    BooleanPipe.decorators = [
        {
            type: Pipe, args: [{
                name: 'boolean'
            },]
        }
    ];
    /** @nocollapse */
    BooleanPipe.ctorParameters = function () {
        return [
            {type: TranslateService}
        ];
    };
    return BooleanPipe;
}());
export {BooleanPipe};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanPipe.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9waXBlL2Jvb2xlYW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXJEO0lBS0UscUJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQy9DLENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQWM7UUFDdEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7SUFDSCxDQUFDOztnQkFsQkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs7OztnQkFKTyxnQkFBZ0I7O0lBc0J4QixrQkFBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLFdBQVc7Ozs7OztJQUVWLGdDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZVNlcnZpY2V9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdib29sZWFuJ1xufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuZ2V0KCdjb21tb24udmFsdWVzLnllcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlLmdldCgnY29tbW9uLnZhbHVlcy5ubycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=
