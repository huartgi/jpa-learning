import * as ɵngcc0 from '@angular/core';
import {PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Label} from '../model/label';

export declare class LabelPipe implements PipeTransform {
    private translate;

    constructor(translate: TranslateService);

    transform(label: Label): any;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<LabelPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<LabelPipe, "label">;
}

//# sourceMappingURL=label.pipe.d.ts.map
