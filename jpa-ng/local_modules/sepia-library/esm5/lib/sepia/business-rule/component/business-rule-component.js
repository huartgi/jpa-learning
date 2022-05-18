/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/business-rule/component/business-rule-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

var BusinessRuleComponent = /** @class */ (function () {
    function BusinessRuleComponent(service) {
        this.service = service;
        this.withErrors = false;
        this.init();
    }

    /**
     * @return {?}
     */
    BusinessRuleComponent.prototype.init = /**
     * @return {?}
     */
    function () {
        this.withErrors = false;
        this.errorKeys = [];
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BusinessRuleComponent.prototype.create = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        var _this = this;
        this.init();
        return this.service.create(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error.error);
        })));
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    BusinessRuleComponent.prototype.update = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        var _this = this;
        this.init();
        return this.service.update(entity).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error.error);
        })));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BusinessRuleComponent.prototype.delete = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.init();
        return this.service.delete(id).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error.error);
        })));
    };
    /**
     * @param {?} apiError
     * @return {?}
     */
    BusinessRuleComponent.prototype.handleError = /**
     * @param {?} apiError
     * @return {?}
     */
    function (apiError) {
        var _this = this;
        this.withErrors = true;
        if (apiError && apiError.errorKeys) {
            apiError.errorKeys.forEach((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.errorKeys.push(error);
            }));
        }
        return throwError(apiError);
    };
    return BusinessRuleComponent;
}());
export {BusinessRuleComponent};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MtcnVsZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhL2J1c2luZXNzLXJ1bGUvY29tcG9uZW50L2J1c2luZXNzLXJ1bGUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJMUM7SUFJRSwrQkFBb0IsT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFIaEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUlqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxzQ0FBTTs7OztJQUFOLFVBQU8sTUFBVztRQUFsQixpQkFHQztRQUZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7OztJQUVELHNDQUFNOzs7O0lBQU4sVUFBTyxNQUFXO1FBQWxCLGlCQUdDO1FBRkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Ozs7O0lBRUQsc0NBQU07Ozs7SUFBTixVQUFPLEVBQU87UUFBZCxpQkFHQztRQUZDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUE3QixDQUE2QixFQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxRQUFrQjtRQUE5QixpQkFNQztRQUxDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQzs7OztJQWxDQywyQ0FBbUI7O0lBQ25CLDBDQUFvQjs7Ozs7SUFFUix3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0FwaUVycm9yfSBmcm9tICcuLi8uLi9tb2RlbC9hcGktZXJyb3InO1xuaW1wb3J0IHtCdXNpbmVzc1J1bGVTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlL2J1c2luZXNzLXJ1bGUtc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBCdXNpbmVzc1J1bGVDb21wb25lbnQge1xuICB3aXRoRXJyb3JzID0gZmFsc2U7XG4gIGVycm9yS2V5czogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBCdXNpbmVzc1J1bGVTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMud2l0aEVycm9ycyA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JLZXlzID0gW107XG4gIH1cblxuICBjcmVhdGUoZW50aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuY3JlYXRlKGVudGl0eSkucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IuZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGUoZW50aXR5OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2UudXBkYXRlKGVudGl0eSkucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IuZXJyb3IpKSk7XG4gIH1cblxuICBkZWxldGUoaWQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5kZWxldGUoaWQpLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLmVycm9yKSkpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IoYXBpRXJyb3I6IEFwaUVycm9yKSB7XG4gICAgdGhpcy53aXRoRXJyb3JzID0gdHJ1ZTtcbiAgICBpZiAoYXBpRXJyb3IgJiYgYXBpRXJyb3IuZXJyb3JLZXlzKSB7XG4gICAgICBhcGlFcnJvci5lcnJvcktleXMuZm9yRWFjaChlcnJvciA9PiB0aGlzLmVycm9yS2V5cy5wdXNoKGVycm9yKSk7XG4gICAgfVxuICAgIHJldHVybiB0aHJvd0Vycm9yKGFwaUVycm9yKTtcbiAgfVxufVxuIl19
