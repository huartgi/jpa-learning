import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {AuthService} from '../auth/service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class SamlHttpClient {

    constructor(private http: HttpClient,
                private authService: AuthService) {
    }

    get<T>(url: string, params?: { [param: string]: string }): Observable<T> {
        return this.http.get(url, {
            params: new HttpParams({fromObject: params}),
            observe: 'response',
            responseType: 'text'
        }).pipe(tap(response => {
                this.authService.redirectToGAAP(response);
            }),
            map(value => JSON.parse(value.body)),
            catchError(response => this.parseErrorResponse(response)));
    }

    post<T>(url: string, body: any | null): Observable<T> {
        return this.http.post(url, body, {
                observe: 'response',
                responseType: 'text'
            }
        ).pipe(tap(response => {
                this.authService.redirectToGAAP(response);
            }),
            map(value => JSON.parse(value.body)),
            catchError(response => this.parseErrorResponse(response)));
    }

    patch<T>(url: string, body: any | null): Observable<T> {
        return this.http.patch(url, body, {
                observe: 'response',
                responseType: 'text'
            }
        ).pipe(tap(response => {
                this.authService.redirectToGAAP(response);
            }),
            map(value => JSON.parse(value.body)),
            catchError(response => this.parseErrorResponse(response)));
    }

    delete<T>(url: string): Observable<T> {
        return this.http.delete(url, {
                observe: 'response',
                responseType: 'text'
            }
        ).pipe(tap(response => {
                this.authService.redirectToGAAP(response);
            }),
            map(value => JSON.parse(value.body)),
            catchError(response => this.parseErrorResponse(response)));
    }

    private parseErrorResponse(errorResponse: any) {
        const transformedResponse = {...errorResponse};
        if (!!errorResponse.error) {
            transformedResponse.error = JSON.parse(errorResponse.error);
        }
        return throwError(transformedResponse);
    }
}
