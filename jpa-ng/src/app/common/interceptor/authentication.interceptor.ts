import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let authResponse = null;

        if (request.url.indexOf("source-environment") != -1) {
            authResponse = JSON.parse(localStorage.getItem(environment.tokenStorageSourceEnvironment));
        } else {
            authResponse = JSON.parse(localStorage.getItem(environment.tokenStorage));
        }

        if (authResponse && authResponse.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${authResponse.token}`
                }
            });
        }
        return next.handle(request);
    }
}
