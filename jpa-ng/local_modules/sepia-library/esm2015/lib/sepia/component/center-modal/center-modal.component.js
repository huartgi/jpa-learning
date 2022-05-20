/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/component/center-modal/center-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalExitEnum} from '../../model/modal-exit.enum';

export class CenterModalComponent {
    /**
     * @param {?} modal
     */
    constructor(modal) {
        this.modal = modal;
        this.okClickEvent = new EventEmitter();
        this.resultOk = ModalExitEnum.OK;
        this.resultCancel = ModalExitEnum.CANCEL;
    }

    /**
     * @return {?}
     */
    okWasClicked() {
        this.modal.close('Ok click');
        this.okClickEvent.emit();
    }
}

CenterModalComponent.decorators = [
    {
        type: Component, args: [{
            selector: 'sepia-center-modal',
            template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-title\">{{ title | translate}}</h4>\n  <button (click)=\"modal.dismiss(resultCancel)\" aria-describedby=\"modal-title\" aria-label=\"Close button\" class=\"close\"\n          type=\"button\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div *ngIf=\"informationMessage\" class=\"row-fluid alert alert-warning\" role=\"alert\">\n    <div class=\"row justify-content-center\">\n      {{ informationMessage | translate }}\n    </div>\n  </div>\n  {{ message | translate }}\n</div>\n<div class=\"modal-footer\">\n  <button (click)=\"modal.dismiss(resultCancel)\" class=\"btn btn-outline-secondary\" id=\"center-modal-cancel-button\"\n          type=\"button\">{{ cancelButton | translate }}</button>\n  <button (click)=\"modal.dismiss(resultOk)\" class=\"btn btn-danger\" id=\"center-modal-ok-button\" ngbAutofocus\n          type=\"button\">{{okButton | translate }}</button>\n</div>\n",
            styles: [""]
        }]
    }
];
/** @nocollapse */
CenterModalComponent.ctorParameters = () => [
    {type: NgbActiveModal}
];
CenterModalComponent.propDecorators = {
    id: [{type: Input}],
    title: [{type: Input}],
    message: [{type: Input}],
    okButton: [{type: Input}],
    cancelButton: [{type: Input}],
    informationMessage: [{type: Input}],
    okClickEvent: [{type: Output}]
};
if (false) {
    /** @type {?} */
    CenterModalComponent.prototype.id;
    /** @type {?} */
    CenterModalComponent.prototype.title;
    /** @type {?} */
    CenterModalComponent.prototype.message;
    /** @type {?} */
    CenterModalComponent.prototype.okButton;
    /** @type {?} */
    CenterModalComponent.prototype.cancelButton;
    /** @type {?} */
    CenterModalComponent.prototype.informationMessage;
    /** @type {?} */
    CenterModalComponent.prototype.okClickEvent;
    /** @type {?} */
    CenterModalComponent.prototype.resultOk;
    /** @type {?} */
    CenterModalComponent.prototype.resultCancel;
    /** @type {?} */
    CenterModalComponent.prototype.modal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VudGVyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvY29tcG9uZW50L2NlbnRlci1tb2RhbC9jZW50ZXItbW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBTzFELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFjL0IsWUFBbUIsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMOUIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUvRCxhQUFRLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFFUSxDQUFDOzs7O0lBRTdDLFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIseS9CQUE0Qzs7YUFFN0M7Ozs7WUFQTyxjQUFjOzs7aUJBVW5CLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUVMLE1BQU07Ozs7SUFQUCxrQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7SUFDdkIsdUNBQXlCOztJQUN6Qix3Q0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIsa0RBQW9DOztJQUVwQyw0Q0FBK0Q7O0lBRS9ELHdDQUE0Qjs7SUFDNUIsNENBQW9DOztJQUV4QixxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiQWN0aXZlTW9kYWx9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7TW9kYWxFeGl0RW51bX0gZnJvbSAnLi4vLi4vbW9kZWwvbW9kYWwtZXhpdC5lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VwaWEtY2VudGVyLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NlbnRlci1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NlbnRlci1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENlbnRlck1vZGFsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9rQnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpbmZvcm1hdGlvbk1lc3NhZ2U6IHN0cmluZztcblxuICBAT3V0cHV0KCkgb2tDbGlja0V2ZW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZXN1bHRPayA9IE1vZGFsRXhpdEVudW0uT0s7XG4gIHJlc3VsdENhbmNlbCA9IE1vZGFsRXhpdEVudW0uQ0FOQ0VMO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbDogTmdiQWN0aXZlTW9kYWwpIHsgfVxuXG4gIG9rV2FzQ2xpY2tlZCgpIHtcbiAgICB0aGlzLm1vZGFsLmNsb3NlKCdPayBjbGljaycpO1xuICAgIHRoaXMub2tDbGlja0V2ZW50LmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=
