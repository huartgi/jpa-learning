import * as ɵngcc0 from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EditModeEnum} from '../model/edit-mode.enum';
import {ModalTypeEnum} from '../model/modal-type.enum';

export declare class ModalService {
    private ngbModal;

    constructor(ngbModal: NgbModal);

    getCancel(editMode: EditModeEnum): NgbModalRef;

    getCancelCreation(): NgbModalRef;

    getCancelModification(): NgbModalRef;

    getDelete(): NgbModalRef;

    getModal(modalType: ModalTypeEnum, informationMessage?: string): NgbModalRef;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ModalService>;
}

//# sourceMappingURL=modal.service.d.ts.map
