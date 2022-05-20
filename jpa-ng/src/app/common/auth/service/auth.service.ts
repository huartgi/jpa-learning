import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {AuthRequest} from '../model/auth-request';
import {AuthResponse} from '../model/auth-response';
import {AuthorizationEnum} from '../model/authorization.enum';
import {JwtFedAuthenticationRequest} from '../model/JwtFedAuthenticationRequest';
import {User} from '../model/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public currentUser$: Observable<User>;
    private endpoint: string = environment.baseUrl;
    private endpointSourceEnvironment: string = environment.baseUrlSourceEnvironment;
    private currentAuthTokenSubject: BehaviorSubject<AuthResponse>;
    private userFromSourceEnvironment: BehaviorSubject<AuthResponse>;

    constructor(private http: HttpClient,
                private router: Router) {
        this.currentAuthTokenSubject = new BehaviorSubject<AuthResponse>(JSON.parse(localStorage.getItem(environment.tokenStorage)));
        this.userFromSourceEnvironment = new BehaviorSubject<AuthResponse>(JSON.parse(localStorage.getItem(environment.tokenStorageSourceEnvironment)));

        this.currentUser$ = this.currentAuthTokenSubject.pipe(
            map((auth: AuthResponse) => AuthService.getCurrentUser(auth))
        );
    }

    get currentAuthTokenValue(): AuthResponse {
        return this.currentAuthTokenSubject.value;
    }

    private static getCurrentUser(auth: AuthResponse) {

        if (auth && auth.token) {
            return auth;
        }
        return null;
    }

    login(user: AuthRequest): Observable<any> {
        return this.http.post<AuthResponse>(this.endpoint + 'generatetoken', user)
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    if (response && response.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(environment.tokenStorage, JSON.stringify(response));
                        this.currentAuthTokenSubject.next(response);
                    }
                    return response;
                }));
    }

    /**
     * Method to log in into the source enviroment
     * We need to store the JWT token in order to call source environment backend
     * @param user
     */
    loginIntoSourceEnvironment(user: AuthRequest): Observable<any> {
        return this.http.post<AuthResponse>(this.endpointSourceEnvironment + 'generatetoken', user)
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    if (response && response.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(environment.tokenStorageSourceEnvironment, JSON.stringify(response));
                        this.currentAuthTokenSubject.next(response);
                    }
                    return response;
                }));
    }

    ssoLogin(): Observable<any> {
        return this.http.get(this.endpoint + 'ssoUser', {observe: 'response', responseType: 'text'});
    }

    generateFedToken(jwtFedAuthenticationRequest: JwtFedAuthenticationRequest): Observable<any> {
        return this.http.post<AuthResponse>(this.endpoint + 'generateFedToken', jwtFedAuthenticationRequest)
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    if (response && response.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(environment.tokenStorage, JSON.stringify(response));
                        this.currentAuthTokenSubject.next(response);
                    }
                    return response;
                }));
    }

    redirectToGAAP(response: HttpResponse<any>, returnUrl: string = '/') {
        if (environment.fedEnabled === 'true' && response.status === 200) {
            // check if response is page containing SAML request
            // if so, redirect to the SSO provider chooser
            if (!!response.body.search && !(response.body.search('SAMLRequest') === -1 && response.body.search('discovery') === -1)) {
                this.navigateToGAAP();
            } else if (!localStorage.getItem(environment.tokenStorage)) {
                // user is authenticated from GAAP and does not have a token
                // generate token...
                const jwtFedAuthenticationRequest = new JwtFedAuthenticationRequest();
                this.generateFedToken(jwtFedAuthenticationRequest).subscribe(() => {
                    this.router.navigate([returnUrl]);
                });
            }
        }
    }

    navigateToGAAP() {
        if (environment.fedEnabled === 'true') {
            console.log('Redirecting to GAAP');
            // remove token from local storage to force regeneration
            this.logout();
            window.location.href = environment.serverUrl + '/saml/login?disco=true&idp=' + environment.fedMetadataID;
        }
    }

    logout() {
        localStorage.removeItem(environment.tokenStorage);
        this.currentAuthTokenSubject.next(null);
        this.router.navigate(['/login']);
    }

    /**
     * Method to check if an user has authorization on the current environment
     * @param authEnum - Authorization to check
     */
    hasAuthorization(authEnum: AuthorizationEnum): boolean {
        if (this.currentAuthTokenValue) {
            for (const auth of this.currentAuthTokenValue.authorizations) {
                if (auth === authEnum) {
                    return true;
                }
            }
            return false;
        }
    }

    /**
     * Method to check if an user has authorization on the source environment
     * @param authEnum - Authorization to check
     */
    hasAuthorizationInSourceEnvironment(authEnum: AuthorizationEnum): boolean {
        if (this.userFromSourceEnvironment.value) {
            for (const auth of this.userFromSourceEnvironment.value.authorizations) {
                if (auth === authEnum) {
                    return true;
                }
            }
            return false;
        }
    }
}
