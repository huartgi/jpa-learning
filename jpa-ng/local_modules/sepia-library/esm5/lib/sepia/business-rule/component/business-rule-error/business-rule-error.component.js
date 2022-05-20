/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-error/business-rule-error.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

var BusinessRuleErrorComponent = /** @class */ (function () {
    function BusinessRuleErrorComponent() {
    }

    /**
     * @return {?}
     */
    BusinessRuleErrorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
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
    BusinessRuleErrorComponent.ctorParameters = function () {
        return [];
    };
    BusinessRuleErrorComponent.propDecorators = {
        businessRuleComponent: [{type: Input}]
    };
    return BusinessRuleErrorComponent;
}());
export {BusinessRuleErrorComponent};
if (false) {
    /** @type {?} */
    BusinessRuleErrorComponent.prototype.businessRuleComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL2J1c2luZXNzLXJ1bGUvY29tcG9uZW50L2J1c2luZXNzLXJ1bGUtZXJyb3IvYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRTtJQVNFO0lBQWdCLENBQUM7Ozs7SUFFakIsNkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHNhQUFtRDs7aUJBRXBEOzs7Ozt3Q0FHRSxLQUFLOztJQU9SLGlDQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksMEJBQTBCOzs7SUFFckMsMkRBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCdXNpbmVzc1J1bGVDb21wb25lbnR9IGZyb20gJy4uL2J1c2luZXNzLXJ1bGUtY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VwaWEtYnVzaW5lc3MtcnVsZS1lcnJvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9idXNpbmVzcy1ydWxlLWVycm9yLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnVzaW5lc3MtcnVsZS1lcnJvci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUnVsZUVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBidXNpbmVzc1J1bGVDb21wb25lbnQ6IEJ1c2luZXNzUnVsZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==
