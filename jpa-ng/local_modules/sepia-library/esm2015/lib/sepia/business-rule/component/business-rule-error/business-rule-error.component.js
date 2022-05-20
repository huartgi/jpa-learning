/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-error/business-rule-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

export class BusinessRuleErrorComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }
}

BusinessRuleErrorComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'sepia-business-rule-error',
            template: "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n  <div class=\"row-fluid business-rule-error\" *ngFor=\"let error of businessRuleComponent.errorKeys\"> {{error | translate}} </div>\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"businessRuleComponent.init()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n",
            styles: [""]
        }]
    }
];
/** @nocollapse */
BusinessRuleErrorComponent.ctorParameters = () => [];
BusinessRuleErrorComponent.propDecorators = {
    businessRuleComponent: [{type: Input}]
};
if (false) {
    /** @type {?} */
    BusinessRuleErrorComponent.prototype.businessRuleComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL2J1c2luZXNzLXJ1bGUvY29tcG9uZW50L2J1c2luZXNzLXJ1bGUtZXJyb3IvYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQU9qRSxNQUFNLE9BQU8sMEJBQTBCO0lBSXJDLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsc2FBQW1EOzthQUVwRDs7Ozs7b0NBR0UsS0FBSzs7OztJQUFOLDJEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnVzaW5lc3NSdWxlQ29tcG9uZW50fSBmcm9tICcuLi9idXNpbmVzcy1ydWxlLWNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlcGlhLWJ1c2luZXNzLXJ1bGUtZXJyb3InLFxuICB0ZW1wbGF0ZVVybDogJy4vYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1c2luZXNzLXJ1bGUtZXJyb3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1J1bGVFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYnVzaW5lc3NSdWxlQ29tcG9uZW50OiBCdXNpbmVzc1J1bGVDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=
