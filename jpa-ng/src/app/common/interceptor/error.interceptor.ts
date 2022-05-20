/**
 * Created by diopma1 on 15/11/2018.
 */
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../auth/service/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    errorHandled: boolean;

    constructor(
        private messageService: MessageService,
        private router: Router,
        private authService: AuthService) {
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((err: HttpErrorResponse) => {

                this.errorHandled = true;

                if (err.status === 401) { // Unauthorized
                    this.messageService.add({severity: 'error', summary: 'Unauthorized', detail: ''});
                    // auto logout if 401 response returned from api
                    this.authService.logout();
                    this.router.navigate(['/login']);
                } else if (err.status === 403) {// FORBIDDEN
                    this.messageService.add({severity: 'error', summary: 'Forbidden', detail: ''});
                    this.router.navigate(['/access']);
                } else if (err.status === 410) {// GONE
                    this.authService.navigateToGAAP();
                } else if (err.status !== 406) {
                    this.messageService.add({severity: 'error', summary: 'An error has occurred', detail: ''});
                }
                return throwError(err);
            }));
    }


}
