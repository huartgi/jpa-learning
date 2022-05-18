import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorMessageService {

    constructor(private translator: TranslateService) {
    }

    transform(errorMessageKeys: string[]): any {
        const errorMessages = [];
        errorMessageKeys.forEach(errorMessage => errorMessages.push({
            severity: 'error',
            summary: this.translator.instant(errorMessage)
        }));
        return errorMessages;
    }

}
