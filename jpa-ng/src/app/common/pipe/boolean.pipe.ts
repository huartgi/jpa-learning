import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
    name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

    constructor(private translator: TranslateService) {
    }

    transform(value: boolean): any {
        if (value === undefined || value === null) {
            return '';
        } else if (value === true) {
            return this.translator.instant('common.values.yes');
        } else {
            return this.translator.instant('common.values.no');
        }
    }

}
