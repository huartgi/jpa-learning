/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/field-error-messages/field-error-messages.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

var FieldErrorMessagesComponent = /** @class */ (function () {
    function FieldErrorMessagesComponent() {
    }

    /**
     * @return {?}
     */
    FieldErrorMessagesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FieldErrorMessagesComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'sepia-field-error-messages',
                template: "<div id=\"{{fieldName}}-error\" class=\"invalid-feedback-rci\" *ngIf=\"errors\">\n  <p *ngIf=\"errors.required\">\n    {{ 'common.validation.required' | translate:{fieldName: fieldLabel | translate } }}\n  </p>\n  <p *ngIf=\"errors.maxlength\">\n    {{ 'common.validation.length' | translate:{fieldName: fieldLabel | translate , min: '0', max: errors.maxlength.requiredLength } }}\n  </p>\n</div>\n",
                styles: [".invalid-feedback-rci{width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}"]
            }]
        }
    ];
    /** @nocollapse */
    FieldErrorMessagesComponent.ctorParameters = function () {
        return [];
    };
    FieldErrorMessagesComponent.propDecorators = {
        fieldName: [{type: Input}],
        fieldLabel: [{type: Input}],
        errors: [{type: Input}]
    };
    return FieldErrorMessagesComponent;
}());
export {FieldErrorMessagesComponent};
if (false) {
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldName;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldLabel;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvZmllbGQtZXJyb3ItbWVzc2FnZXMvZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFdkQ7SUFXRTtJQUFnQixDQUFDOzs7O0lBRWpCLDhDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QywwWkFBb0Q7O2lCQUVyRDs7Ozs7NEJBR0UsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBT1Isa0NBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLDJCQUEyQjs7O0lBRXRDLGdEQUEyQjs7SUFDM0IsaURBQTRCOztJQUM1Qiw2Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlcGlhLWZpZWxkLWVycm9yLW1lc3NhZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpZWxkLWVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEVycm9yTWVzc2FnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpZWxkTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBmaWVsZExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGVycm9ycztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==
