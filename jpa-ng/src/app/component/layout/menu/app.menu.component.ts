import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {forkJoin} from 'rxjs';
import {AppComponent} from '../../../app.component';
import {AuthorizationEnum} from '../../../common/auth/model/authorization.enum';
import {AuthService} from '../../../common/auth/service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent,
                private translateService: TranslateService,
                private authService: AuthService) {
    }

    ngOnInit() {

        const menuItems = [];

        forkJoin({
            'subscriptions': this.translateService.get('menu.subscription.title'),
            'subscriptions-search': this.translateService.get('menu.subscription.search'),
            'subscriptions-create': this.translateService.get('menu.subscription.create'),
            'subscriptions-import': this.translateService.get('menu.subscription.import'),
            'console': this.translateService.get('menu.console.title'),
            'console-authorizations': this.translateService.get('menu.console.authorizations'),
        }).subscribe(
            response => {
                const subscriptionsItems = [
                    {
                        label: response['subscriptions-search'],
                        icon: 'pi pi-fw pi-search',
                        routerLink: ['/']
                    }];

                if (this.authService.hasAuthorization(AuthorizationEnum.SUB_CREATE)) {
                    subscriptionsItems.push({
                        label: response['subscriptions-create'],
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['subscriptions/create/']
                    });
                }

                if (this.authService.hasAuthorization(AuthorizationEnum.SUB_IMPORT)) {
                    subscriptionsItems.push({
                        label: response['subscriptions-import'],
                        icon: 'pi pi-fw pi-upload',
                        routerLink: ['subscriptions/import']
                    });
                }

                this.model = [
                    {
                        label: response['subscriptions'], icon: 'pi pi-fw pi-home',
                        items: subscriptionsItems
                    },
                    {
                        label: response['console'], icon: 'pi pi-fw pi-home',
                        items: [
                            {
                                label: response['console-authorizations'],
                                icon: 'pi pi-fw pi-unlock',
                                routerLink: ['console/matrix']
                            }
                        ]
                    }
                ];
            },
            error => {
                // handle error
            }
        );
    }
}
