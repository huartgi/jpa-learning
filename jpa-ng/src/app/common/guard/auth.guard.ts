import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {MessageService} from 'primeng/api';
import {User} from '../auth/model/user';

import {AuthService} from '../auth/service/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    private currentUser: User;

    constructor(
        private messageService: MessageService,
        private authService: AuthService,
        private router: Router) {
        this.authService.currentUser$.subscribe((u: User) => this.currentUser = u);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (this.authService.currentAuthTokenValue) {
            // check if user has at least one profile (i.e. has at least global reader authorization)
            if (!(this.currentUser.profiles && this.currentUser.profiles.length)) {
                // user not allowed
                this.router.navigate(['/access']);
                return false;
            }
            // check if route is restricted by role
            if (route.data.restrict) {
                if (!(this.inArray(route.data.restrict, this.currentUser.profiles)
                    || this.inArray(route.data.restrict, this.currentUser.authorizations))) {

                    // user not authorized on this resource, redirect to homepage
                    this.messageService.add({severity: 'error', summary: 'Unauthorized', detail: ''});
                    this.router.navigate(['/access']);
                    return false;
                }
            }
            // user is allowed
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

    private inArray(array: string[], values: string[]) {
        let found = false;
        array.forEach(value => {
            const foundInArray = values.indexOf(value) !== -1;
            if (foundInArray) {
                found = foundInArray;
            }
        });
        return found;
    }

}
