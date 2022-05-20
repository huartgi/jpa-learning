/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/boolean.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Pipe} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export class BooleanPipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value === undefined || value === null) {
            return '';
        } else {
            if (value === true) {
                return this.translate.get('common.values.yes');
            } else {
                return this.translate.get('common.values.no');
            }
        }
    }
}

BooleanPipe.decorators = [
    {
        type: Pipe, args: [{
            name: 'boolean'
        },]
    }
];
/** @nocollapse */
BooleanPipe.ctorParameters = () => [
    {type: TranslateService}
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanPipe.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9waXBlL2Jvb2xlYW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBS3JELE1BQU0sT0FBTyxXQUFXOzs7O0lBRXRCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQy9DLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7SUFDSCxDQUFDOzs7WUFsQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxTQUFTO2FBQ2hCOzs7O1lBSk8sZ0JBQWdCOzs7Ozs7O0lBT1YsZ0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2Jvb2xlYW4nXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZS5nZXQoJ2NvbW1vbi52YWx1ZXMueWVzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuZ2V0KCdjb21tb24udmFsdWVzLm5vJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
