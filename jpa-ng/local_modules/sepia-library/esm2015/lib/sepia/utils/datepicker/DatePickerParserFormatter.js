/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/utils/datepicker/DatePickerParserFormatter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
import {Injectable} from '@angular/core';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

export class DatePickerParserFormatter extends NgbDateParserFormatter {
    constructor() {
        super(...arguments);
        this.DELIMITER = '/';
    }

    /**
     * @param {?} value
     * @return {?}
     */
    parse(value) {
        if (value) {
            /** @type {?} */
            const date = value.split(this.DELIMITER);
            return {
                day: parseInt(date[0], 10),
                month: parseInt(date[1], 10),
                year: parseInt(date[2], 10)
            };
        }
        return null;
    }

    /**
     * @param {?} date
     * @return {?}
     */
    format(date) {
        return date ? date.day.toString().padStart(2, '0') + this.DELIMITER + date.month.toString().padStart(2, '0') + this.DELIMITER + date.year : '';
    }
}

DatePickerParserFormatter.decorators = [
    {type: Injectable}
];
if (false) {
    /** @type {?} */
    DatePickerParserFormatter.prototype.DELIMITER;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVBpY2tlclBhcnNlckZvcm1hdHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvdXRpbHMvZGF0ZXBpY2tlci9EYXRlUGlja2VyUGFyc2VyRm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsc0JBQXNCLEVBQWdCLE1BQU0sNEJBQTRCLENBQUM7QUFHakYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHNCQUFzQjtJQURyRTs7UUFHVyxjQUFTLEdBQUcsR0FBRyxDQUFDO0lBa0IzQixDQUFDOzs7OztJQWhCQyxLQUFLLENBQUMsS0FBYTtRQUNqQixJQUFJLEtBQUssRUFBRTs7a0JBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxPQUFPO2dCQUNMLEdBQUcsRUFBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0IsS0FBSyxFQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QixJQUFJLEVBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDN0IsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUEwQjtRQUUvQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xKLENBQUM7OztZQXBCRixVQUFVOzs7O0lBR1QsOENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIFNlcnZpY2UgaGFuZGxlcyBob3cgdGhlIGRhdGUgaXMgcmVuZGVyZWQgYW5kIHBhcnNlZCBmcm9tIGtleWJvYXJkIGkuZS4gaW4gdGhlIGJvdW5kIGlucHV0IGZpZWxkLlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JEYXRlUGFyc2VyRm9ybWF0dGVyLCBOZ2JEYXRlU3RydWN0fSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyUGFyc2VyRm9ybWF0dGVyIGV4dGVuZHMgTmdiRGF0ZVBhcnNlckZvcm1hdHRlciB7XG5cbiAgcmVhZG9ubHkgREVMSU1JVEVSID0gJy8nO1xuXG4gIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlID0gdmFsdWUuc3BsaXQodGhpcy5ERUxJTUlURVIpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF5IDogcGFyc2VJbnQoZGF0ZVswXSwgMTApLFxuICAgICAgICBtb250aCA6IHBhcnNlSW50KGRhdGVbMV0sIDEwKSxcbiAgICAgICAgeWVhciA6IHBhcnNlSW50KGRhdGVbMl0sIDEwKVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3JtYXQoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBzdHJpbmcge1xuXG4gICAgcmV0dXJuIGRhdGUgPyBkYXRlLmRheS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJykgICsgdGhpcy5ERUxJTUlURVIgKyBkYXRlLm1vbnRoLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSArIHRoaXMuREVMSU1JVEVSICsgZGF0ZS55ZWFyIDogJyc7XG4gIH1cbn1cbiJdfQ==
