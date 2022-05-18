/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia/pipe/enum-to-array.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {Pipe} from '@angular/core';

export class EnumToArrayPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value).map((/**
         * @param {?} o
         * @return {?}
         */
            o => {
            return {index: +o, name: value[o]};
        }));
    }
}

EnumToArrayPipe.decorators = [
    {type: Pipe, args: [{name: 'enumToArray'},]}
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bS10by1hcnJheS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VwaWEtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9zZXBpYS9waXBlL2VudW0tdG8tYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBR2xELE1BQU0sT0FBTyxlQUFlOzs7OztJQUMxQixTQUFTLENBQUMsS0FBSztRQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFORixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdlbnVtVG9BcnJheSd9KVxuZXhwb3J0IGNsYXNzIEVudW1Ub0FycmF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWUpOiBhbnkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubWFwKG8gPT4ge1xuICAgICAgcmV0dXJuIHtpbmRleDogK28sIG5hbWU6IHZhbHVlW29dfTtcbiAgICB9KTtcbiAgfVxufVxuIl19
