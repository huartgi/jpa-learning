/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/label.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Pipe} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export class LabelPipe {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @param {?} label
     * @return {?}
     */
    transform(label) {
        if (label) {
            if (this.translate.currentLang === 'fr') {
                return label.labelFr;
            } else {
                return label.labelEn;
            }
        }
    }
}

LabelPipe.decorators = [
    {
        type: Pipe, args: [{
            name: 'label'
        },]
    }
];
/** @nocollapse */
LabelPipe.ctorParameters = () => [
    {type: TranslateService}
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelPipe.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvcGlwZS9sYWJlbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFNckQsTUFBTSxPQUFPLFNBQVM7Ozs7SUFFcEIsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWTtRQUNwQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO2dCQUN2QyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDOzs7WUFoQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2Q7Ozs7WUFMTyxnQkFBZ0I7Ozs7Ozs7SUFRViw4QkFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpcGUsIFBpcGVUcmFuc2Zvcm19IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7TGFiZWx9IGZyb20gJy4uL21vZGVsL2xhYmVsJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbGFiZWwnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0obGFiZWw6IExhYmVsKTogYW55IHtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGlmICh0aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZyA9PT0gJ2ZyJykge1xuICAgICAgICByZXR1cm4gbGFiZWwubGFiZWxGcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsYWJlbC5sYWJlbEVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=
