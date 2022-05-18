/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/service/sorting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as i0 from '@angular/core';
import {Injectable} from '@angular/core';
import {SortableColumn} from '../model/search/sorting/sortable-column';
import {SortingDirectionEnum} from '../model/search/sorting/sorting-direction.enum';

var SortingService = /** @class */ (function () {
    function SortingService() {
    }

    /**
     * @param {?} sortableColumns
     * @return {?}
     */
    SortingService.prototype.getSortableColumn = /**
     * @param {?} sortableColumns
     * @return {?}
     */
    function (sortableColumns) {
        if (sortableColumns) {
            return sortableColumns.find((/**
             * @param {?} column
             * @return {?}
             */
            function (column) {
                return column.direction != null;
            }));
        }
        return new SortableColumn('asd', 'asd', SortingDirectionEnum.ASC, '', null);
    };
    /**
     * @param {?} chosenColumn
     * @param {?} sortableColumns
     * @return {?}
     */
    SortingService.prototype.clearPreviousSorting = /**
     * @param {?} chosenColumn
     * @param {?} sortableColumns
     * @return {?}
     */
    function (chosenColumn, sortableColumns) {
        sortableColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return column !== chosenColumn;
        })).forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return column.direction = null;
        }));
    };
    SortingService.decorators = [
        {
            type: Injectable, args: [{
                providedIn: 'root'
            },]
        }
    ];
    /** @nocollapse */
    SortingService.ctorParameters = function () {
        return [];
    };
    /** @nocollapse */ SortingService.ngInjectableDef = i0.ɵɵdefineInjectable({
        factory: function SortingService_Factory() {
            return new SortingService();
        }, token: SortingService, providedIn: "root"
    });
    return SortingService;
}());
export {SortingService};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9zZXJ2aWNlL3NvcnRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDOztBQUVwRjtJQUtFO0lBQWdCLENBQUM7Ozs7O0lBRVYsMENBQWlCOzs7O0lBQXhCLFVBQXlCLGVBQWlDO1FBQ3hELElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sZUFBZSxDQUFDLElBQUk7Ozs7WUFDekIsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksRUFBeEIsQ0FBd0IsRUFDbkMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU0sNkNBQW9COzs7OztJQUEzQixVQUE0QixZQUE0QixFQUFFLGVBQWlDO1FBQ3pGLGVBQWUsQ0FBQyxNQUFNOzs7O1FBQ3BCLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLFlBQVksRUFBdkIsQ0FBdUIsRUFDbEMsQ0FBQyxPQUFPOzs7O1FBQ1AsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksRUFBdkIsQ0FBdUIsRUFDbEMsQ0FBQztJQUNKLENBQUM7O2dCQXRCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFORDtDQTJCQyxBQXZCRCxJQXVCQztTQXBCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydGFibGVDb2x1bW59IGZyb20gJy4uL21vZGVsL3NlYXJjaC9zb3J0aW5nL3NvcnRhYmxlLWNvbHVtbic7XG5pbXBvcnQge1NvcnRpbmdEaXJlY3Rpb25FbnVtfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gvc29ydGluZy9zb3J0aW5nLWRpcmVjdGlvbi5lbnVtJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIGdldFNvcnRhYmxlQ29sdW1uKHNvcnRhYmxlQ29sdW1uczogU29ydGFibGVDb2x1bW5bXSk6IFNvcnRhYmxlQ29sdW1uIHtcbiAgICBpZiAoc29ydGFibGVDb2x1bW5zKSB7XG4gICAgICByZXR1cm4gc29ydGFibGVDb2x1bW5zLmZpbmQoXG4gICAgICAgIGNvbHVtbiA9PiBjb2x1bW4uZGlyZWN0aW9uICE9IG51bGxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU29ydGFibGVDb2x1bW4oJ2FzZCcsICdhc2QnLCBTb3J0aW5nRGlyZWN0aW9uRW51bS5BU0MsICcnLCBudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclByZXZpb3VzU29ydGluZyhjaG9zZW5Db2x1bW46IFNvcnRhYmxlQ29sdW1uLCBzb3J0YWJsZUNvbHVtbnM6IFNvcnRhYmxlQ29sdW1uW10pIHtcbiAgICBzb3J0YWJsZUNvbHVtbnMuZmlsdGVyKFxuICAgICAgY29sdW1uID0+IGNvbHVtbiAhPT0gY2hvc2VuQ29sdW1uXG4gICAgKS5mb3JFYWNoKFxuICAgICAgY29sdW1uID0+IGNvbHVtbi5kaXJlY3Rpb24gPSBudWxsXG4gICAgKTtcbiAgfVxufVxuIl19
