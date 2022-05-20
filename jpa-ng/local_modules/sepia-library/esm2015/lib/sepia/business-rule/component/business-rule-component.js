/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

export class BusinessRuleComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.withErrors = false;
        this.init();
    }

    /**
     * @return {?}
     */
    init() {
        this.withErrors = false;
        this.errorKeys = [];
    }

    /**
     * @param {?} entity
     * @return {?}
     */
    create(entity) {
        this.init();
        return this.service.create(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} entity
     * @return {?}
     */
    update(entity) {
        this.init();
        return this.service.update(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        this.init();
        return this.service.delete(id).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
            error => this.handleError(error.error))));
    }

    /**
     * @param {?} apiError
     * @return {?}
     */
    handleError(apiError) {
        this.withErrors = true;
        if (apiError && apiError.errorKeys) {
            apiError.errorKeys.forEach((/**
             * @param {?} error
             * @return {?}
             */
                error => this.errorKeys.push(error)));
        }
        return throwError(apiError);
    }
}

if (false) {
    /** @type {?} */
    BusinessRuleComponent.prototype.withErrors;
    /** @type {?} */
    BusinessRuleComponent.prototype.errorKeys;
    /**
     * @type {?}
     * @private
     */
    BusinessRuleComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtcnVsZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL2J1c2luZXNzLXJ1bGUvY29tcG9uZW50L2J1c2luZXNzLXJ1bGUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFvQixPQUE0QjtRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFxQjtRQUhoRCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSWpCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBVztRQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBTztRQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxRQUFrQjtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRjs7O0lBbENDLDJDQUFtQjs7SUFDbkIsMENBQW9COzs7OztJQUVSLHdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QXBpRXJyb3J9IGZyb20gJy4uLy4uL21vZGVsL2FwaS1lcnJvcic7XG5pbXBvcnQge0J1c2luZXNzUnVsZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UvYnVzaW5lc3MtcnVsZS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUnVsZUNvbXBvbmVudCB7XG4gIHdpdGhFcnJvcnMgPSBmYWxzZTtcbiAgZXJyb3JLZXlzOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEJ1c2luZXNzUnVsZVNlcnZpY2UpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy53aXRoRXJyb3JzID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvcktleXMgPSBbXTtcbiAgfVxuXG4gIGNyZWF0ZShlbnRpdHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5jcmVhdGUoZW50aXR5KS5waXBlKGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvci5lcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZShlbnRpdHk6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS51cGRhdGUoZW50aXR5KS5waXBlKGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvci5lcnJvcikpKTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmRlbGV0ZShpZCkucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IuZXJyb3IpKSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihhcGlFcnJvcjogQXBpRXJyb3IpIHtcbiAgICB0aGlzLndpdGhFcnJvcnMgPSB0cnVlO1xuICAgIGlmIChhcGlFcnJvciAmJiBhcGlFcnJvci5lcnJvcktleXMpIHtcbiAgICAgIGFwaUVycm9yLmVycm9yS2V5cy5mb3JFYWNoKGVycm9yID0+IHRoaXMuZXJyb3JLZXlzLnB1c2goZXJyb3IpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRocm93RXJyb3IoYXBpRXJyb3IpO1xuICB9XG59XG4iXX0=
