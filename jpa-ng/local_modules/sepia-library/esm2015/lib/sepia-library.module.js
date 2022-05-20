/**
 * @fileoverview added by tsickle
 * Generated from: lib/sepia-library.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {SepiaLibraryComponent} from './sepia-library.component';
import {BusinessRuleErrorComponent} from './sepia/business-rule/component/business-rule-error/business-rule-error.component';
import {CenterModalComponent} from './sepia/component/center-modal/center-modal.component';
import {FieldErrorMessagesComponent} from './sepia/component/field-error-messages/field-error-messages.component';
import {LongTextTooltipComponent} from './sepia/component/long-text-tooltip/long-text-tooltip.component';
import {SvgIconComponent} from './sepia/component/svg/svg-icon/svg-icon.component';
import {TableFilterHeadersComponent} from './sepia/component/table-filter-headers/table-filter-headers.component';
import {CapsDetectorDirective} from './sepia/directive/caps-detector.directive';
import {DisableControlDirective} from './sepia/directive/disable-control.directive';
import {BooleanPipe} from './sepia/pipe/boolean.pipe';
import {EnumToArrayPipe} from './sepia/pipe/enum-to-array.pipe';
import {LabelPipe} from './sepia/pipe/label.pipe';

export class SepiaLibraryModule {
}

SepiaLibraryModule.decorators = [
    {
        type: NgModule, args: [{
            declarations: [
                SepiaLibraryComponent,
                BusinessRuleErrorComponent,
                LabelPipe,
                BooleanPipe,
                EnumToArrayPipe,
                CenterModalComponent,
                TableFilterHeadersComponent,
                CapsDetectorDirective,
                DisableControlDirective,
                LongTextTooltipComponent,
                SvgIconComponent,
                FieldErrorMessagesComponent,
            ],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                NgbModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            exports: [
                SepiaLibraryComponent,
                BusinessRuleErrorComponent,
                LabelPipe,
                BooleanPipe,
                EnumToArrayPipe,
                CenterModalComponent,
                TableFilterHeadersComponent,
                CapsDetectorDirective,
                DisableControlDirective,
                LongTextTooltipComponent,
                SvgIconComponent,
                FieldErrorMessagesComponent,
            ],
            entryComponents: [CenterModalComponent]
        },]
    }
];

// required for AOT compilation
/**
 * @param {?} http
 * @return {?}
 */
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwaWEtbGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZXBpYS1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NlcGlhLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3JFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1GQUFtRixDQUFDO0FBQzdILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVFQUF1RSxDQUFDO0FBQ2xILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQ25GLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVFQUF1RSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBOENsRCxNQUFNLE9BQU8sa0JBQWtCOzs7WUEzQzlCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLFNBQVM7b0JBQ1QsV0FBVztvQkFDWCxlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsMkJBQTJCO29CQUMzQixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixTQUFTO29CQUNULGVBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGlCQUFpQjs0QkFDN0IsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDO3lCQUNuQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLDBCQUEwQjtvQkFDMUIsU0FBUztvQkFDVCxXQUFXO29CQUNYLGVBQWU7b0JBQ2Ysb0JBQW9CO29CQUNwQiwyQkFBMkI7b0JBQzNCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLGdCQUFnQjtvQkFDaEIsMkJBQTJCO2lCQUM1QjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUN4Qzs7Ozs7OztBQUtELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxJQUFnQjtJQUNoRCxPQUFPLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1RyYW5zbGF0ZUh0dHBMb2FkZXJ9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcbmltcG9ydCB7U2VwaWFMaWJyYXJ5Q29tcG9uZW50fSBmcm9tICcuL3NlcGlhLWxpYnJhcnkuY29tcG9uZW50JztcbmltcG9ydCB7QnVzaW5lc3NSdWxlRXJyb3JDb21wb25lbnR9IGZyb20gJy4vc2VwaWEvYnVzaW5lc3MtcnVsZS9jb21wb25lbnQvYnVzaW5lc3MtcnVsZS1lcnJvci9idXNpbmVzcy1ydWxlLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQge0NlbnRlck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL3NlcGlhL2NvbXBvbmVudC9jZW50ZXItbW9kYWwvY2VudGVyLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpZWxkRXJyb3JNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSAnLi9zZXBpYS9jb21wb25lbnQvZmllbGQtZXJyb3ItbWVzc2FnZXMvZmllbGQtZXJyb3ItbWVzc2FnZXMuY29tcG9uZW50JztcbmltcG9ydCB7TG9uZ1RleHRUb29sdGlwQ29tcG9uZW50fSBmcm9tICcuL3NlcGlhL2NvbXBvbmVudC9sb25nLXRleHQtdG9vbHRpcC9sb25nLXRleHQtdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdmdJY29uQ29tcG9uZW50fSBmcm9tICcuL3NlcGlhL2NvbXBvbmVudC9zdmcvc3ZnLWljb24vc3ZnLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVGaWx0ZXJIZWFkZXJzQ29tcG9uZW50fSBmcm9tICcuL3NlcGlhL2NvbXBvbmVudC90YWJsZS1maWx0ZXItaGVhZGVycy90YWJsZS1maWx0ZXItaGVhZGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHtDYXBzRGV0ZWN0b3JEaXJlY3RpdmV9IGZyb20gJy4vc2VwaWEvZGlyZWN0aXZlL2NhcHMtZGV0ZWN0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7RGlzYWJsZUNvbnRyb2xEaXJlY3RpdmV9IGZyb20gJy4vc2VwaWEvZGlyZWN0aXZlL2Rpc2FibGUtY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtCb29sZWFuUGlwZX0gZnJvbSAnLi9zZXBpYS9waXBlL2Jvb2xlYW4ucGlwZSc7XG5pbXBvcnQge0VudW1Ub0FycmF5UGlwZX0gZnJvbSAnLi9zZXBpYS9waXBlL2VudW0tdG8tYXJyYXkucGlwZSc7XG5pbXBvcnQge0xhYmVsUGlwZX0gZnJvbSAnLi9zZXBpYS9waXBlL2xhYmVsLnBpcGUnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNlcGlhTGlicmFyeUNvbXBvbmVudCxcbiAgICBCdXNpbmVzc1J1bGVFcnJvckNvbXBvbmVudCxcbiAgICBMYWJlbFBpcGUsXG4gICAgQm9vbGVhblBpcGUsXG4gICAgRW51bVRvQXJyYXlQaXBlLFxuICAgIENlbnRlck1vZGFsQ29tcG9uZW50LFxuICAgIFRhYmxlRmlsdGVySGVhZGVyc0NvbXBvbmVudCxcbiAgICBDYXBzRGV0ZWN0b3JEaXJlY3RpdmUsXG4gICAgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgTG9uZ1RleHRUb29sdGlwQ29tcG9uZW50LFxuICAgIFN2Z0ljb25Db21wb25lbnQsXG4gICAgRmllbGRFcnJvck1lc3NhZ2VzQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBIdHRwTG9hZGVyRmFjdG9yeSxcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNlcGlhTGlicmFyeUNvbXBvbmVudCxcbiAgICBCdXNpbmVzc1J1bGVFcnJvckNvbXBvbmVudCxcbiAgICBMYWJlbFBpcGUsXG4gICAgQm9vbGVhblBpcGUsXG4gICAgRW51bVRvQXJyYXlQaXBlLFxuICAgIENlbnRlck1vZGFsQ29tcG9uZW50LFxuICAgIFRhYmxlRmlsdGVySGVhZGVyc0NvbXBvbmVudCxcbiAgICBDYXBzRGV0ZWN0b3JEaXJlY3RpdmUsXG4gICAgRGlzYWJsZUNvbnRyb2xEaXJlY3RpdmUsXG4gICAgTG9uZ1RleHRUb29sdGlwQ29tcG9uZW50LFxuICAgIFN2Z0ljb25Db21wb25lbnQsXG4gICAgRmllbGRFcnJvck1lc3NhZ2VzQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDZW50ZXJNb2RhbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU2VwaWFMaWJyYXJ5TW9kdWxlIHtcbn1cblxuLy8gcmVxdWlyZWQgZm9yIEFPVCBjb21waWxhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBMb2FkZXJGYWN0b3J5KGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHApO1xufVxuIl19
