/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/long-text-tooltip/long-text-tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, Input} from '@angular/core';

var LongTextTooltipComponent = /** @class */ (function () {
    function LongTextTooltipComponent() {
    }

    /**
     * @return {?}
     */
    LongTextTooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} divElement
     * @param {?} t
     * @return {?}
     */
    LongTextTooltipComponent.prototype.openTooltip = /**
     * @param {?} divElement
     * @param {?} t
     * @return {?}
     */
    function (divElement, t) {
        if (divElement.offsetWidth < divElement.scrollWidth) {
            t.open();
        }
    };
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
    LongTextTooltipComponent.ctorParameters = function () {
        return [];
    };
    LongTextTooltipComponent.propDecorators = {
        longText: [{type: Input}]
    };
    return LongTextTooltipComponent;
}());
export {LongTextTooltipComponent};
if (false) {
    /** @type {?} */
    LongTextTooltipComponent.prototype.longText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy10ZXh0LXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9jb21wb25lbnQvbG9uZy10ZXh0LXRvb2x0aXAvbG9uZy10ZXh0LXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFHdkQ7SUFTRTtJQUFnQixDQUFDOzs7O0lBRWpCLDJDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7OztJQUVELDhDQUFXOzs7OztJQUFYLFVBQVksVUFBMEIsRUFBRSxDQUFhO1FBQ25ELElBQUksVUFBVSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ25ELENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNWO0lBQ0gsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxxVUFBaUQ7O2lCQUVsRDs7Ozs7MkJBR0UsS0FBSzs7SUFZUiwrQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksd0JBQXdCOzs7SUFFbkMsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JUb29sdGlwfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlcGlhLWxvbmctdGV4dC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvbmctdGV4dC10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9uZy10ZXh0LXRvb2x0aXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb25nVGV4dFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxvbmdUZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9wZW5Ub29sdGlwKGRpdkVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LCB0OiBOZ2JUb29sdGlwKSB7XG4gICAgaWYgKGRpdkVsZW1lbnQub2Zmc2V0V2lkdGggPCBkaXZFbGVtZW50LnNjcm9sbFdpZHRoKSB7XG4gICAgICB0Lm9wZW4oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
