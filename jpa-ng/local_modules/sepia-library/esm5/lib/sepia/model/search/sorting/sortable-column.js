/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/model/search/sorting/sortable-column.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {SortingDirectionEnum} from './sorting-direction.enum';

var SortableColumn = /** @class */ (function () {
    function SortableColumn(name, title, direction, bootstrapClass, filterInputType, values, sortable, width) {
        this.name = name;
        this.title = title;
        this.direction = direction;
        this.bootstrapClass = bootstrapClass;
        this.filterInputType = filterInputType;
        this.values = values;
        if (sortable === false) {
            this.sortable = false;
        } else {
            this.sortable = true;
        }
        this.width = width;
    }

    /**
     * @return {?}
     */
    SortableColumn.prototype.toggleDirection = /**
     * @return {?}
     */
    function () {
        if (this.direction === SortingDirectionEnum.DESC) {
            this.direction = null;
        } else if (this.direction === SortingDirectionEnum.ASC) {
            this.direction = SortingDirectionEnum.DESC;
        } else {
            this.direction = SortingDirectionEnum.ASC;
        }
    };
    return SortableColumn;
}());
export {SortableColumn};
if (false) {
    /** @type {?} */
    SortableColumn.prototype.name;
    /** @type {?} */
    SortableColumn.prototype.title;
    /** @type {?} */
    SortableColumn.prototype.direction;
    /** @type {?} */
    SortableColumn.prototype.bootstrapClass;
    /** @type {?} */
    SortableColumn.prototype.filterInputType;
    /** @type {?} */
    SortableColumn.prototype.values;
    /** @type {?} */
    SortableColumn.prototype.sortable;
    /** @type {?} */
    SortableColumn.prototype.width;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9tb2RlbC9zZWFyY2gvc29ydGluZy9zb3J0YWJsZS1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU5RDtJQVVFLHdCQUFZLElBQVksRUFDWixLQUFhLEVBQ2IsU0FBK0IsRUFDL0IsY0FBc0IsRUFDdEIsZUFBb0MsRUFDcEMsTUFBdUIsRUFDdkIsUUFBa0IsRUFDbEIsS0FBYztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7OztJQUVNLHdDQUFlOzs7SUFBdEI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssb0JBQW9CLENBQUMsSUFBSSxFQUFFO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLG9CQUFvQixDQUFDLEdBQUcsRUFBRTtZQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUgscUJBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7O0lBekNDLDhCQUFhOztJQUNiLCtCQUFjOztJQUNkLG1DQUFnQzs7SUFDaEMsd0NBQXVCOztJQUN2Qix5Q0FBcUM7O0lBQ3JDLGdDQUF3Qjs7SUFDeEIsa0NBQW1COztJQUNuQiwrQkFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7S2V5VmFsdWVQYWlyfSBmcm9tICcuLi8uLi9rZXktdmFsdWUtcGFpcic7XG5pbXBvcnQge0ZpbHRlcklucHV0VHlwZUVudW19IGZyb20gJy4uL2ZpbHRlcmluZy9maWx0ZXItaW5wdXQtdHlwZS5lbnVtJztcbmltcG9ydCB7U29ydGluZ0RpcmVjdGlvbkVudW19IGZyb20gJy4vc29ydGluZy1kaXJlY3Rpb24uZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBTb3J0YWJsZUNvbHVtbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uRW51bTtcbiAgYm9vdHN0cmFwQ2xhc3M6IHN0cmluZztcbiAgZmlsdGVySW5wdXRUeXBlOiBGaWx0ZXJJbnB1dFR5cGVFbnVtO1xuICB2YWx1ZXM/OiBLZXlWYWx1ZVBhaXJbXTtcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICB3aWR0aD86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbkVudW0sXG4gICAgICAgICAgICAgIGJvb3RzdHJhcENsYXNzOiBzdHJpbmcsXG4gICAgICAgICAgICAgIGZpbHRlcklucHV0VHlwZTogRmlsdGVySW5wdXRUeXBlRW51bSxcbiAgICAgICAgICAgICAgdmFsdWVzPzogS2V5VmFsdWVQYWlyW10sXG4gICAgICAgICAgICAgIHNvcnRhYmxlPzogYm9vbGVhbixcbiAgICAgICAgICAgICAgd2lkdGg/OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLmJvb3RzdHJhcENsYXNzID0gYm9vdHN0cmFwQ2xhc3M7XG4gICAgdGhpcy5maWx0ZXJJbnB1dFR5cGUgPSBmaWx0ZXJJbnB1dFR5cGU7XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgaWYgKHNvcnRhYmxlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zb3J0YWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURpcmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFNvcnRpbmdEaXJlY3Rpb25FbnVtLkRFU0MpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBTb3J0aW5nRGlyZWN0aW9uRW51bS5BU0MpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gU29ydGluZ0RpcmVjdGlvbkVudW0uREVTQztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBTb3J0aW5nRGlyZWN0aW9uRW51bS5BU0M7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
