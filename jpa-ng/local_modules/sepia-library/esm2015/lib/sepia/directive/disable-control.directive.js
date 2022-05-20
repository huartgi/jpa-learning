/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/directive/disable-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Directive, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

export class DisableControlDirective {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
    }

    /**
     * @param {?} condition
     * @return {?}
     */
    set disableControl(condition) {
        /** @type {?} */
        const action = condition ? 'disable' : 'enable';
        this.ngControl.control[action]();
    }
}

DisableControlDirective.decorators = [
    {
        type: Directive, args: [{
            selector: '[disableControl]'
        },]
    }
];
/** @nocollapse */
DisableControlDirective.ctorParameters = () => [
    {type: NgControl}
];
DisableControlDirective.propDecorators = {
    disableControl: [{type: Input}]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DisableControlDirective.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvZGlyZWN0aXZlL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFLekMsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVsQyxZQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQ3hDLENBQUM7Ozs7O0lBRUQsSUFBYSxjQUFjLENBQUMsU0FBa0I7O2NBQ3RDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSk8sU0FBUzs7OzZCQVVkLEtBQUs7Ozs7Ozs7SUFITSw0Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rpc2FibGVDb250cm9sXSdcbn0pXG5leHBvcnQgY2xhc3MgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlQ29udHJvbChjb25kaXRpb246IGJvb2xlYW4pIHtcbiAgICBjb25zdCBhY3Rpb24gPSBjb25kaXRpb24gPyAnZGlzYWJsZScgOiAnZW5hYmxlJztcbiAgICB0aGlzLm5nQ29udHJvbC5jb250cm9sW2FjdGlvbl0oKTtcbiAgfVxuXG59XG4iXX0=
