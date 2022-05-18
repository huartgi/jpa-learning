/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/svg/svg-icon/svg-icon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';
import {SvgIcon} from '../svg-icon.enum';

var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent() {
    }

    /**
     * @return {?}
     */
    SvgIconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(SvgIconComponent.prototype, "SvgIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return SvgIcon;
        },
        enumerable: true,
        configurable: true
    });
    SvgIconComponent.decorators = [
        {
            type: Component, args: [{
                selector: 'sepia-svg-icon',
                template: "<svg *ngIf=\"type === SvgIcon.ARROW_DOWN\" class=\"bi bi-arrow-down\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_UP\" class=\"bi bi-arrow-up\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.ARROW_REPEAT\" class=\"bi bi-arrow-repeat\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CALENDAR\" class=\"bi bi-calendar\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.CHECK_CIRCLE_FILL\" class=\"bi bi-check-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.EYE\" class=\"bi bi-eye\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 001.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0014.828 8a13.133 13.133 0 00-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 001.172 8z\" clip-rule=\"evenodd\"/>\n  <path fill-rule=\"evenodd\" d=\"M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM4.5 8a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z\" clip-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.GRID\" class=\"bi bi-grid-3x3-gap-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.LIST\" class=\"bi bi-justify\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PENCIL_SQUARE\" class=\"bi bi-pencil-square\" fill=\"currentColor\" height=\"1em\"\n     viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z\"/>\n  <path clip-rule=\"evenodd\"\n        d=\"M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.PERSON\" class=\"bi bi-person\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path\n    d=\"M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z\"\n    fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.SEARCH\" class=\"bi bi-search\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\"\n     width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path clip-rule=\"evenodd\"\n        d=\"M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE\" class=\"bi bi-x-circle\" fill=\"currentColor\" height=\"1em\" viewBox=\"0 0 16 16\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z\" clip-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z\"\n        fill-rule=\"evenodd\"/>\n  <path clip-rule=\"evenodd\" d=\"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z\"\n        fill-rule=\"evenodd\"/>\n</svg>\n\n<svg *ngIf=\"type === SvgIcon.X_CIRCLE_FILL\" class=\"bi bi-x-circle-fill\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z\"/>\n</svg>\n",
                styles: [""]
            }]
        }
    ];
    /** @nocollapse */
    SvgIconComponent.ctorParameters = function () {
        return [];
    };
    SvgIconComponent.propDecorators = {
        type: [{type: Input}]
    };
    return SvgIconComponent;
}());
export {SvgIconComponent};
if (false) {
    /** @type {?} */
    SvgIconComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvc3ZnL3N2Zy1pY29uL3N2Zy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUV6QztJQVNFO0lBQWdCLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0lBQ0EsQ0FBQztJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw4Z1BBQXdDOztpQkFFekM7Ozs7O3VCQUdFLEtBQUs7O0lBV1IsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLGdCQUFnQjs7O0lBRTNCLGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ZnSWNvbn0gZnJvbSAnLi4vc3ZnLWljb24uZW51bSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlcGlhLXN2Zy1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Zy1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnLWljb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdmdJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB0eXBlOiBTdmdJY29uO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXQgU3ZnSWNvbigpIHtcbiAgICByZXR1cm4gU3ZnSWNvbjtcbiAgfVxuXG59XG4iXX0=
