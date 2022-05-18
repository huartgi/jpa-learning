/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/handler/ErrorsHandler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// errors-handler.ts
import {Injectable} from '@angular/core';

export class ErrorsHandler {
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        /** @type {?} */
        const appError = (/** @type {?} */ (error));
        // if is an BusinessError we should not log the error in the browser console
        if (!appError.errorKeys) {
            console.error('It happens: ', error);
        }
    }
}

ErrorsHandler.decorators = [
    {type: Injectable}
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvaGFuZGxlci9FcnJvcnNIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBZSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHdkQsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3hCLFdBQVcsQ0FBQyxLQUFZOztjQUNoQixRQUFRLEdBQUcsbUJBQUEsS0FBSyxFQUFPO1FBQzdCLDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7OztZQVJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlcnJvcnMtaGFuZGxlci50c1xuaW1wb3J0IHtFcnJvckhhbmRsZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JzSGFuZGxlciBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG4gIGhhbmRsZUVycm9yKGVycm9yOiBFcnJvcikge1xuICAgIGNvbnN0IGFwcEVycm9yID0gZXJyb3IgYXMgYW55O1xuICAgIC8vIGlmIGlzIGFuIEJ1c2luZXNzRXJyb3Igd2Ugc2hvdWxkIG5vdCBsb2cgdGhlIGVycm9yIGluIHRoZSBicm93c2VyIGNvbnNvbGVcbiAgICBpZiAoIWFwcEVycm9yLmVycm9yS2V5cykge1xuICAgICAgY29uc29sZS5lcnJvcignSXQgaGFwcGVuczogJywgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19
