import * as ɵngcc0 from '@angular/core';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export declare class DatePickerAdapter extends NgbDateAdapter<string> {
    readonly DELIMITER = "/";

    fromModel(value: string | null): NgbDateStruct | null;

    toModel(value: NgbDateStruct | null): string | null;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DatePickerAdapter>;
}

//# sourceMappingURL=DatePickerAdapter.d.ts.map
