import * as ɵngcc0 from '@angular/core';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export declare class DatePickerParserFormatter extends NgbDateParserFormatter {
    readonly DELIMITER = "/";

    parse(value: string): NgbDateStruct | null;

    format(date: NgbDateStruct | null): string;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatePickerParserFormatter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DatePickerParserFormatter>;
}

//# sourceMappingURL=DatePickerParserFormatter.d.ts.map
