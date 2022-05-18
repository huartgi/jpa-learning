/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This class contains all information relative to Pagination for a search page */
export class Pagination {
    constructor() {
        /**
         * The current page of the results
         */
        this.currentPage = 1;
        /**
         * Maximum number of results displayed per page
         */
        this.pageSize = 10;
    }

    /**
     * Returns the index of the first row we want from the database
     * @return {?}
     */
    getFirstResult() {
        return (this.currentPage - 1) * this.pageSize;
    }
}

if (false) {
    /**
     * The current page of the results
     * @type {?}
     */
    Pagination.prototype.currentPage;
    /**
     * Maximum number of results displayed per page
     * @type {?}
     */
    Pagination.prototype.pageSize;
    /**
     * Total number of results matching the criteria in the database
     * @type {?}
     */
    Pagination.prototype.totalResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcGlhLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2VwaWEvbW9kZWwvc2VhcmNoL3BhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxPQUFPLFVBQVU7SUFBdkI7Ozs7UUFFRSxnQkFBVyxHQUFHLENBQUMsQ0FBQzs7OztRQUVoQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBU2hCLENBQUM7Ozs7O0lBSEMsY0FBYztRQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEQsQ0FBQztDQUNGOzs7Ozs7SUFYQyxpQ0FBZ0I7Ozs7O0lBRWhCLDhCQUFjOzs7OztJQUVkLGlDQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGlzIGNsYXNzIGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiByZWxhdGl2ZSB0byBQYWdpbmF0aW9uIGZvciBhIHNlYXJjaCBwYWdlICovXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uIHtcbiAgLyoqIFRoZSBjdXJyZW50IHBhZ2Ugb2YgdGhlIHJlc3VsdHMgKi9cbiAgY3VycmVudFBhZ2UgPSAxO1xuICAvKiogTWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyBkaXNwbGF5ZWQgcGVyIHBhZ2UgKi9cbiAgcGFnZVNpemUgPSAxMDtcbiAgLyoqIFRvdGFsIG51bWJlciBvZiByZXN1bHRzIG1hdGNoaW5nIHRoZSBjcml0ZXJpYSBpbiB0aGUgZGF0YWJhc2UgKi9cbiAgdG90YWxSZXN1bHQ6IG51bWJlcjtcblxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgcm93IHdlIHdhbnQgZnJvbSB0aGUgZGF0YWJhc2UgKi9cbiAgZ2V0Rmlyc3RSZXN1bHQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2VTaXplO1xuICB9XG59XG4iXX0=
