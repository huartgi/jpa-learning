/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/language.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as i0 from '@angular/core';
import {Injectable} from '@angular/core';
import * as i1 from '@ngx-translate/core';
import {TranslateService} from '@ngx-translate/core';

var LanguageService = /** @class */ (function () {
    function LanguageService(translate) {
        this.translate = translate;
    }

    /**
     * @return {?}
     */
    LanguageService.prototype.isEnglish = /**
     * @return {?}
     */
    function () {
        return !this.translate.currentLang || this.translate.currentLang === 'en';
    };
    /**
     * @return {?}
     */
    LanguageService.prototype.isFrench = /**
     * @return {?}
     */
    function () {
        return this.translate.currentLang === 'fr';
    };
    LanguageService.decorators = [
        {
            type: Injectable, args: [{
                providedIn: 'root'
            },]
        }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () {
        return [
            {type: TranslateService}
        ];
    };
    /** @nocollapse */ LanguageService.ngInjectableDef = i0.ɵɵdefineInjectable({
        factory: function LanguageService_Factory() {
            return new LanguageService(i0.ɵɵinject(i1.TranslateService));
        }, token: LanguageService, providedIn: "root"
    });
    return LanguageService;
}());
export {LanguageService};
if (false) {
    /**
     * @type {?}
     * @private
     */
    LanguageService.prototype.translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvc2VydmljZS9sYW5ndWFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXJEO0lBS0UseUJBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUksQ0FBQzs7OztJQUVwRCxtQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQzVFLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQztJQUM3QyxDQUFDOztnQkFiRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUpPLGdCQUFnQjs7OzBCQUR4QjtDQWlCQyxBQWRELElBY0M7U0FYWSxlQUFlOzs7Ozs7SUFFZCxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkgeyB9XG5cbiAgaXNFbmdsaXNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgfHwgdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdlbic7XG4gIH1cblxuICBpc0ZyZW5jaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUuY3VycmVudExhbmcgPT09ICdmcic7XG4gIH1cbn1cbiJdfQ==
