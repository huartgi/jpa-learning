import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppAccessdeniedComponent} from './component/exceptions/access-denied/app.accessdenied.component';
import {AppErrorComponent} from './component/exceptions/error/app.error.component';
import {AppNotfoundComponent} from './component/exceptions/not-found/app.notfound.component';
import {HomeComponent} from './component/home/home.component';
import {AppLoginComponent} from './component/login/app.login.component';

// @ts-ignore
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'login', component: AppLoginComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
