/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/field-error-messages/field-error-messages.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

export class FieldErrorMessagesComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }
}

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
FieldErrorMessagesComponent.ctorParameters = () => [];
FieldErrorMessagesComponent.propDecorators = {
    fieldName: [{type: Input}],
    fieldLabel: [{type: Input}],
    errors: [{type: Input}]
};
if (false) {
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldName;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.fieldLabel;
    /** @type {?} */
    FieldErrorMessagesComponent.prototype.errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvZmllbGQtZXJyb3ItbWVzc2FnZXMvZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsTUFBTSxPQUFPLDJCQUEyQjtJQU10QyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDBaQUFvRDs7YUFFckQ7Ozs7O3dCQUdFLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBRk4sZ0RBQTJCOztJQUMzQixpREFBNEI7O0lBQzVCLDZDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VwaWEtZmllbGQtZXJyb3ItbWVzc2FnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWVsZC1lcnJvci1tZXNzYWdlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkRXJyb3JNZXNzYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmllbGROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpZWxkTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JzO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19
