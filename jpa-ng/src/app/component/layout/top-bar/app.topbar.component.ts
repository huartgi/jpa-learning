import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AppComponent} from '../../../app.component';
import {ProfileEnum} from '../../../common/auth/model/profile.enum';
import {AuthService} from '../../../common/auth/service/auth.service';
import {HomeComponent} from '../../home/home.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    public mainProfile: string;
    public env = environment.currentEnv;

    constructor(public appMain: HomeComponent,
                public app: AppComponent,
                public authService: AuthService) {
    }

    ngOnInit(): void {
        this.determineMainProfile();
    }

    determineMainProfile() {
        if (!!this.authService.currentAuthTokenValue) {
            const profiles = this.authService.currentAuthTokenValue.profiles;
            if (profiles.includes(ProfileEnum.ADMIN)) {
                this.mainProfile = 'ADMIN';
            } else if (profiles.includes(ProfileEnum.PROVIDER)) {
                this.mainProfile = 'PROVIDER';
            } else if (profiles.includes(ProfileEnum.CLIENT)) {
                this.mainProfile = 'CLIENT';
            }
        }
    }

    logout() {
        this.authService.logout();
    }
}

