/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/directive/disable-control.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Directive, Input} from '@angular/core';
import {NgControl} from '@angular/forms';

var DisableControlDirective = /** @class */ (function () {
    function DisableControlDirective(ngControl) {
        this.ngControl = ngControl;
    }

    Object.defineProperty(DisableControlDirective.prototype, "disableControl", {
        set: /**
         * @param {?} condition
         * @return {?}
         */
        function (condition) {
            /** @type {?} */
            var action = condition ? 'disable' : 'enable';
            this.ngControl.control[action]();
        },
        enumerable: true,
        configurable: true
    });
    DisableControlDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[disableControl]'
            },]
        }
    ];
    /** @nocollapse */
    DisableControlDirective.ctorParameters = function () {
        return [
            {type: NgControl}
        ];
    };
    DisableControlDirective.propDecorators = {
        disableControl: [{type: Input}]
    };
    return DisableControlDirective;
}());
export {DisableControlDirective};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DisableControlDirective.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzYWJsZS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvZGlyZWN0aXZlL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekM7SUFLRSxpQ0FBb0IsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUN4QyxDQUFDO0lBRUQsc0JBQWEsbURBQWM7Ozs7O1FBQTNCLFVBQTRCLFNBQWtCOztnQkFDdEMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFKTyxTQUFTOzs7aUNBVWQsS0FBSzs7SUFLUiw4QkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLHVCQUF1Qjs7Ozs7O0lBRXRCLDRDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZGlzYWJsZUNvbnRyb2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXNhYmxlQ29udHJvbERpcmVjdGl2ZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGRpc2FibGVDb250cm9sKGNvbmRpdGlvbjogYm9vbGVhbikge1xuICAgIGNvbnN0IGFjdGlvbiA9IGNvbmRpdGlvbiA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2xbYWN0aW9uXSgpO1xuICB9XG5cbn1cbiJdfQ==
