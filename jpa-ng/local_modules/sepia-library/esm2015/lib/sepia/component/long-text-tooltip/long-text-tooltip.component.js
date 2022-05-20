/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/long-text-tooltip/long-text-tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

export class LongTextTooltipComponent {
    constructor() {
    }

    /**
     * @return {?}
     */
    ngOnInit() {
    }

    /**
     * @param {?} divElement
     * @param {?} t
     * @return {?}
     */
    openTooltip(divElement, t) {
        if (divElement.offsetWidth < divElement.scrollWidth) {
            t.open();
        }
    }
}

LongTextTooltipComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'sepia-long-text-tooltip',
            template: "<div #divElement\n     class=\"largeTextEllipsis\"\n    ngbTooltip=\"{{longText}}\"\n    [autoClose]=\"true\"\n    placement=\"top\"\n    triggers=\"manual\"\n    #t=\"ngbTooltip\"\n     container=\"body\"\n    (mouseover)=\"openTooltip(divElement, t)\" (mouseleave)=\"t.close()\">\n\n  {{ longText }}\n\n</div>\n",
            styles: [""]
        }]
    }
];
/** @nocollapse */
LongTextTooltipComponent.ctorParameters = () => [];
LongTextTooltipComponent.propDecorators = {
    longText: [{type: Input}]
};
if (false) {
    /** @type {?} */
    LongTextTooltipComponent.prototype.longText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy10ZXh0LXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvbG9uZy10ZXh0LXRvb2x0aXAvbG9uZy10ZXh0LXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFRdkQsTUFBTSxPQUFPLHdCQUF3QjtJQUluQyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLFVBQTBCLEVBQUUsQ0FBYTtRQUNuRCxJQUFJLFVBQVUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUNuRCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDVjtJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMscVVBQWlEOzthQUVsRDs7Ozs7dUJBR0UsS0FBSzs7OztJQUFOLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiVG9vbHRpcH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXBpYS1sb25nLXRleHQtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb25nLXRleHQtdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvbmctdGV4dC10b29sdGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9uZ1RleHRUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsb25nVGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvcGVuVG9vbHRpcChkaXZFbGVtZW50OiBIVE1MRGl2RWxlbWVudCwgdDogTmdiVG9vbHRpcCkge1xuICAgIGlmIChkaXZFbGVtZW50Lm9mZnNldFdpZHRoIDwgZGl2RWxlbWVudC5zY3JvbGxXaWR0aCkge1xuICAgICAgdC5vcGVuKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
