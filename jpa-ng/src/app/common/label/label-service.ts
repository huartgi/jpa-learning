import {Injectable} from '@angular/core';
import {Label, LanguageService} from 'sepia-library';

@Injectable({
    providedIn: 'root'
})
export class LabelService {


    constructor(private languageService: LanguageService) {
    }

    i18nLabel(value: string): Label {
        const label = new Label();
        if (this.languageService.isEnglish()) {
            label.labelEn = value;
        } else {
            label.labelFr = value;
        }
        return label;
    }
}
