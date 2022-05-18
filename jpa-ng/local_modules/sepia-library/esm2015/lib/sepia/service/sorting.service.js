/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/sorting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as i0 from '@angular/core';
import {Injectable} from '@angular/core';
import {SortableColumn} from '../model/search/sorting/sortable-column';
import {SortingDirectionEnum} from '../model/search/sorting/sorting-direction.enum';

export class SortingService {
    constructor() {
    }

    /**
     * @param {?} sortableColumns
     * @return {?}
     */
    getSortableColumn(sortableColumns) {
        if (sortableColumns) {
            return sortableColumns.find((/**
             * @param {?} column
             * @return {?}
             */
                column => column.direction != null));
        }
        return new SortableColumn('asd', 'asd', SortingDirectionEnum.ASC, '', null);
    }

    /**
     * @param {?} chosenColumn
     * @param {?} sortableColumns
     * @return {?}
     */
    clearPreviousSorting(chosenColumn, sortableColumns) {
        sortableColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
            column => column !== chosenColumn)).forEach((/**
         * @param {?} column
         * @return {?}
         */
            column => column.direction = null));
    }
}

SortingService.decorators = [
    {
        type: Injectable, args: [{
            providedIn: 'root'
        },]
    }
];
/** @nocollapse */
SortingService.ctorParameters = () => [];
/** @nocollapse */ SortingService.ngInjectableDef = i0.ɵɵdefineInjectable({
    factory: function SortingService_Factory() {
        return new SortingService();
    }, token: SortingService, providedIn: "root"
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9zZXJ2aWNlL3NvcnRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDOztBQUtwRixNQUFNLE9BQU8sY0FBYztJQUV6QixnQkFBZ0IsQ0FBQzs7Ozs7SUFFVixpQkFBaUIsQ0FBQyxlQUFpQztRQUN4RCxJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQ3pCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQ25DLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7Ozs7OztJQUVNLG9CQUFvQixDQUFDLFlBQTRCLEVBQUUsZUFBaUM7UUFDekYsZUFBZSxDQUFDLE1BQU07Ozs7UUFDcEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssWUFBWSxFQUNsQyxDQUFDLE9BQU87Ozs7UUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxFQUNsQyxDQUFDO0lBQ0osQ0FBQzs7O1lBdEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NvcnRhYmxlQ29sdW1ufSBmcm9tICcuLi9tb2RlbC9zZWFyY2gvc29ydGluZy9zb3J0YWJsZS1jb2x1bW4nO1xuaW1wb3J0IHtTb3J0aW5nRGlyZWN0aW9uRW51bX0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoL3NvcnRpbmcvc29ydGluZy1kaXJlY3Rpb24uZW51bSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBnZXRTb3J0YWJsZUNvbHVtbihzb3J0YWJsZUNvbHVtbnM6IFNvcnRhYmxlQ29sdW1uW10pOiBTb3J0YWJsZUNvbHVtbiB7XG4gICAgaWYgKHNvcnRhYmxlQ29sdW1ucykge1xuICAgICAgcmV0dXJuIHNvcnRhYmxlQ29sdW1ucy5maW5kKFxuICAgICAgICBjb2x1bW4gPT4gY29sdW1uLmRpcmVjdGlvbiAhPSBudWxsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFNvcnRhYmxlQ29sdW1uKCdhc2QnLCAnYXNkJywgU29ydGluZ0RpcmVjdGlvbkVudW0uQVNDLCAnJywgbnVsbCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJQcmV2aW91c1NvcnRpbmcoY2hvc2VuQ29sdW1uOiBTb3J0YWJsZUNvbHVtbiwgc29ydGFibGVDb2x1bW5zOiBTb3J0YWJsZUNvbHVtbltdKSB7XG4gICAgc29ydGFibGVDb2x1bW5zLmZpbHRlcihcbiAgICAgIGNvbHVtbiA9PiBjb2x1bW4gIT09IGNob3NlbkNvbHVtblxuICAgICkuZm9yRWFjaChcbiAgICAgIGNvbHVtbiA9PiBjb2x1bW4uZGlyZWN0aW9uID0gbnVsbFxuICAgICk7XG4gIH1cbn1cbiJdfQ==
