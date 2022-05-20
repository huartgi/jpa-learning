/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/directive/caps-detector.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

var CapsDetectorDirective = /** @class */ (function () {
    function CapsDetectorDirective() {
        this.capsLock = new EventEmitter();
    }

    /**
     * @param {?} event
     * @return {?}
     */
    CapsDetectorDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CapsDetectorDirective.prototype.onKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    };
    CapsDetectorDirective.decorators = [
        {
            type: Directive, args: [{
                selector: '[appCapsLock]'
            },]
        }
    ];
    /** @nocollapse */
    CapsDetectorDirective.ctorParameters = function () {
        return [];
    };
    CapsDetectorDirective.propDecorators = {
        capsLock: [{type: Output}],
        onKeyDown: [{type: HostListener, args: ['window:keydown', ['$event'],]}],
        onKeyUp: [{type: HostListener, args: ['window:keyup', ['$event'],]}]
    };
    return CapsDetectorDirective;
}());
export {CapsDetectorDirective};
if (false) {
    /** @type {?} */
    CapsDetectorDirective.prototype.capsLock;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fwcy1kZXRlY3Rvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL2RpcmVjdGl2ZS9jYXBzLWRldGVjdG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUU7SUFPRTtRQUZVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBR2pELENBQUM7Ozs7O0lBR0QseUNBQVM7Ozs7SUFEVCxVQUNVLEtBQW9COztZQUN0QixNQUFNLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFHRCx1Q0FBTzs7OztJQURQLFVBQ1EsS0FBb0I7O1lBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUMsZ0JBQWdCLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztRQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7Ozs7MkJBR0UsTUFBTTs0QkFLTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBTXpDLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBSzFDLDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FsQlkscUJBQXFCOzs7SUFFaEMseUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwQ2Fwc0xvY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBDYXBzRGV0ZWN0b3JEaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBjYXBzTG9jayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2Fwc09uID0gZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSAmJiBldmVudC5nZXRNb2RpZmllclN0YXRlKCdDYXBzTG9jaycpO1xuICAgIHRoaXMuY2Fwc0xvY2suZW1pdChjYXBzT24pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNhcHNPbiA9IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgJiYgZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKTtcbiAgICB0aGlzLmNhcHNMb2NrLmVtaXQoY2Fwc09uKTtcbiAgfVxufVxuIl19
