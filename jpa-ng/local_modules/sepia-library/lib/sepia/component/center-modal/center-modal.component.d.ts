import * as ɵngcc0 from '@angular/core';
import {EventEmitter} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalExitEnum} from '../../model/modal-exit.enum';

export declare class CenterModalComponent {
    modal: NgbActiveModal;
    id: string;
    title: string;
    message: string;
    okButton: string;
    cancelButton: string;
    informationMessage: string;
    okClickEvent: EventEmitter<any>;
    resultOk: ModalExitEnum;
    resultCancel: ModalExitEnum;

    constructor(modal: NgbActiveModal);

    okWasClicked(): void;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<CenterModalComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CenterModalComponent, "sepia-center-modal", never, { "id": "id"; "title": "title"; "message": "message"; "okButton": "okButton"; "cancelButton": "cancelButton"; "informationMessage": "informationMessage"; }, { "okClickEvent": "okClickEvent"; }, never, never>;
}

//# sourceMappingURL=center-modal.component.d.ts.map
