import * as ɵngcc0 from '@angular/core';
import {PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export declare class BooleanPipe implements PipeTransform {
    private translate;

    constructor(translate: TranslateService);

    transform(value: boolean): any;

    static ɵfac: ɵngcc0.ɵɵFactoryDef<BooleanPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<BooleanPipe, "boolean">;
}

//# sourceMappingURL=boolean.pipe.d.ts.map
