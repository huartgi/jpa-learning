/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as i0 from '@angular/core';
import {Injectable} from '@angular/core';
import * as i1 from '@ng-bootstrap/ng-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CenterModalComponent} from '../component/center-modal/center-modal.component';
import {EditModeEnum} from '../model/edit-mode.enum';
import {ModalTypeEnum} from '../model/modal-type.enum';

export class ModalService {
    /**
     * @param {?} ngbModal
     */
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
    }

    /**
     * @param {?} editMode
     * @return {?}
     */
    getCancel(editMode) {
        if (editMode === EditModeEnum.CREATE) {
            return this.getCancelCreation();
        } else if (editMode === EditModeEnum.UPDATE) {
            return this.getCancelModification();
        } else {
            return null;
        }
    }

    /**
     * @return {?}
     */
    getCancelCreation() {
        return this.getModal(ModalTypeEnum.CANCEL_CREATION);
    }

    /**
     * @return {?}
     */
    getCancelModification() {
        return this.getModal(ModalTypeEnum.CANCEL_MODIFICATION);
    }

    /**
     * @return {?}
     */
    getDelete() {
        return this.getModal(ModalTypeEnum.DELETE);
    }

    /**
     * @param {?} modalType
     * @param {?=} informationMessage
     * @return {?}
     */
    getModal(modalType, informationMessage) {
        /** @type {?} */
        const modal = this.ngbModal.open(CenterModalComponent);
        modal.componentInstance.id = 'confirmModal';
        modal.componentInstance.title = 'common.confirm.' + modalType + '.title';
        modal.componentInstance.message = 'common.confirm.' + modalType + '.message';
        modal.componentInstance.okButton = 'common.buttons.confirm';
        modal.componentInstance.cancelButton = 'common.buttons.cancel';
        modal.componentInstance.informationMessage = informationMessage;
        return modal;
    }
}

ModalService.decorators = [
    {
        type: Injectable, args: [{
            providedIn: 'root'
        },]
    }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    {type: NgbModal}
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({
    factory: function ModalService_Factory() {
        return new ModalService(i0.ɵɵinject(i1.NgbModal));
    }, token: ModalService, providedIn: "root"
});
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.ngbModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvc2VydmljZS9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsUUFBUSxFQUFjLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS3ZELE1BQU0sT0FBTyxZQUFZOzs7O0lBRXZCLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUU1QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUFzQjtRQUM5QixJQUFJLFFBQVEsS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDakM7YUFBTSxJQUFJLFFBQVEsS0FBSyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDckM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLFNBQXdCLEVBQUUsa0JBQTJCOztjQUN0RCxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDdEQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsR0FBRyxjQUFjLENBQUM7UUFDNUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxpQkFBaUIsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3pFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUM3RSxLQUFLLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDO1FBQzVELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsdUJBQXVCLENBQUM7UUFDL0QsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2hFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBekNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBPLFFBQVE7Ozs7Ozs7O0lBV1osZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiTW9kYWwsIE5nYk1vZGFsUmVmfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQge0NlbnRlck1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnQvY2VudGVyLW1vZGFsL2NlbnRlci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0TW9kZUVudW19IGZyb20gJy4uL21vZGVsL2VkaXQtbW9kZS5lbnVtJztcbmltcG9ydCB7TW9kYWxUeXBlRW51bX0gZnJvbSAnLi4vbW9kZWwvbW9kYWwtdHlwZS5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nYk1vZGFsOiBOZ2JNb2RhbFxuICApIHtcbiAgfVxuXG4gIGdldENhbmNlbChlZGl0TW9kZTogRWRpdE1vZGVFbnVtKTogTmdiTW9kYWxSZWYge1xuICAgIGlmIChlZGl0TW9kZSA9PT0gRWRpdE1vZGVFbnVtLkNSRUFURSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FuY2VsQ3JlYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGVkaXRNb2RlID09PSBFZGl0TW9kZUVudW0uVVBEQVRFKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDYW5jZWxNb2RpZmljYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FuY2VsQ3JlYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TW9kYWwoTW9kYWxUeXBlRW51bS5DQU5DRUxfQ1JFQVRJT04pO1xuICB9XG5cbiAgZ2V0Q2FuY2VsTW9kaWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldE1vZGFsKE1vZGFsVHlwZUVudW0uQ0FOQ0VMX01PRElGSUNBVElPTik7XG4gIH1cblxuICBnZXREZWxldGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TW9kYWwoTW9kYWxUeXBlRW51bS5ERUxFVEUpO1xuICB9XG5cbiAgZ2V0TW9kYWwobW9kYWxUeXBlOiBNb2RhbFR5cGVFbnVtLCBpbmZvcm1hdGlvbk1lc3NhZ2U/OiBzdHJpbmcpOiBOZ2JNb2RhbFJlZiB7XG4gICAgY29uc3QgbW9kYWwgPSB0aGlzLm5nYk1vZGFsLm9wZW4oQ2VudGVyTW9kYWxDb21wb25lbnQpO1xuICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLmlkID0gJ2NvbmZpcm1Nb2RhbCc7XG4gICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UudGl0bGUgPSAnY29tbW9uLmNvbmZpcm0uJyArIG1vZGFsVHlwZSArICcudGl0bGUnO1xuICAgIG1vZGFsLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSAnY29tbW9uLmNvbmZpcm0uJyArIG1vZGFsVHlwZSArICcubWVzc2FnZSc7XG4gICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2Uub2tCdXR0b24gPSAnY29tbW9uLmJ1dHRvbnMuY29uZmlybSc7XG4gICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuY2FuY2VsQnV0dG9uID0gJ2NvbW1vbi5idXR0b25zLmNhbmNlbCc7XG4gICAgbW9kYWwuY29tcG9uZW50SW5zdGFuY2UuaW5mb3JtYXRpb25NZXNzYWdlID0gaW5mb3JtYXRpb25NZXNzYWdlO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG59XG4iXX0=
