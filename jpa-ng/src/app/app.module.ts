import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {ConfirmDialog} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {MultiSelectModule} from 'primeng/multiselect';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PanelModule} from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {StepsModule} from 'primeng/steps';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {HttpLoaderFactory, SepiaLibraryModule} from 'sepia-library';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationsCompareComponent} from './common/console/component/authorizations/authorizations-compare/authorizations-compare.component';
import {AuthorizationsComponent} from './common/console/component/authorizations/authorizations.component';
import {ConsoleComponent} from './common/console/component/console/console.component';
import {UserAthenaSearchPersonComponent} from './common/console/component/user-athena/user-athena-search-person/user-athena-search-person.component';
import {UserAthenaViewComponent} from './common/console/component/user-athena/user-athena-view/user-athena-view.component';
import {UserAthenaComponent} from './common/console/component/user-athena/user-athena.component';
import {RoleDirective} from './common/directive/role.directive';
import {RolesDirective} from './common/directive/roles.directive';
import {AuthenticationInterceptor} from './common/interceptor/authentication.interceptor';
import {ErrorInterceptor} from './common/interceptor/error.interceptor';
import {SpinnerInterceptor} from './common/interceptor/spinner.interceptor';
import {BooleanPipe} from './common/pipe/boolean.pipe';
import {CurrencySymbolPipe} from './common/pipe/currencySymbol.pipe';
import {UnescapePipe} from './common/pipe/Unescape.pipe';
import {SvgIconComponent} from './common/svg/svg-icon/svg-icon.component';
import {AppAccessdeniedComponent} from './component/exceptions/access-denied/app.accessdenied.component';
import {AppErrorComponent} from './component/exceptions/error/app.error.component';
import {AppNotfoundComponent} from './component/exceptions/not-found/app.notfound.component';
import {HomeComponent} from './component/home/home.component';
import {AppBreadcrumbComponent} from './component/layout/breadcrumb/app.breadcrumb.component';
import {AppBreadcrumbService} from './component/layout/breadcrumb/app.breadcrumb.service';
import {AppConfigComponent} from './component/layout/config/app.config.component';
import {AppFooterComponent} from './component/layout/footer/app.footer.component';
import {AppMenuComponent} from './component/layout/menu/app.menu.component';
import {MenuService} from './component/layout/menu/app.menu.service';
import {AppMenuitemComponent} from './component/layout/menu/app.menuitem.component';
import {AppTopBarComponent} from './component/layout/top-bar/app.topbar.component';
import {AppLoginComponent} from './component/login/app.login.component';

export function appInitializerFactory(translate: TranslateService) {
    return () => {
        translate.setDefaultLang('en');
        return translate.use('en').toPromise();
    };
}

@NgModule({
    imports: [
        SepiaLibraryModule,
        ReactiveFormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        AvatarModule,
        BadgeModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CardModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipsModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        DynamicDialogModule,
        FieldsetModule,
        FieldsetModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        NgbPaginationModule,
        NgbTabsetModule,
        PanelModule,
        ProgressSpinnerModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        SelectButtonModule,
        SidebarModule,
        StepsModule,
        TabMenuModule,
        TabViewModule,
        TabViewModule,
        TableModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        InputTextareaModule,
        CalendarModule,
        TooltipModule,
        OverlayPanelModule
    ],
    declarations: [
        AppAccessdeniedComponent,
        AppBreadcrumbComponent,
        AppComponent,
        AppConfigComponent,
        AppErrorComponent,
        AppFooterComponent,
        AppLoginComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppNotfoundComponent,
        AppTopBarComponent,
        AuthorizationsCompareComponent,
        AuthorizationsComponent,
        BooleanPipe,
        ConfirmDialog,
        ConsoleComponent,
        CurrencySymbolPipe,
        HomeComponent,
        RoleDirective,
        RolesDirective,
        SvgIconComponent,
        UnescapePipe,
        UserAthenaComponent,
        UserAthenaSearchPersonComponent,
        UserAthenaViewComponent
    ],
    providers: [
        DialogService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MenuService, AppBreadcrumbService, MessageService, ConfirmationService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
        {provide: APP_INITIALIZER, useFactory: appInitializerFactory, deps: [TranslateService], multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
