import {getCurrencySymbol} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

    transform(
        code: string,
        format?: 'narrow',
        locale?: string
    ): any {
        return getCurrencySymbol(code, format, locale) === code ? '' : getCurrencySymbol(code, format, locale);
    }
}
