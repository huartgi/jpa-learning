/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/language.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as i0 from '@angular/core';
import {Injectable} from '@angular/core';
import * as i1 from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';

export class LanguageService {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }

    /**
     * @return {?}
     */
    isEnglish() {
        return !this.translate.currentLang || this.translate.currentLang === 'en';
    }

    /**
     * @return {?}
     */
    isFrench() {
        return this.translate.currentLang === 'fr';
    }
}

LanguageService.decorators = [
    {
        type: Injectable, args: [{
            providedIn: 'root'
        },]
    }
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    {type: TranslateService}
];
/** @nocollapse */ LanguageService.ngInjectableDef = i0.ɵɵdefineInjectable({
    factory: function LanguageService_Factory() {
        return new LanguageService(i0.ɵɵinject(i1.TranslateService));
    }, token: LanguageService, providedIn: "root"
});
if (false) {
    /**
     * @type {?}
     * @private
     */
    LanguageService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvc2VydmljZS9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3JELE1BQU0sT0FBTyxlQUFlOzs7O0lBRTFCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUksQ0FBQzs7OztJQUVwRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQzdDLENBQUM7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpPLGdCQUFnQjs7Ozs7Ozs7SUFPVixvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgaXNFbmdsaXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgfHwgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbic7XG4gIH1cblxuICBpc0ZyZW5jaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdmcic7XG4gIH1cbn1cbiJdfQ==
