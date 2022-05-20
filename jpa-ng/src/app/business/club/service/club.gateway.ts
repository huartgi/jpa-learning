import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Club} from '../domain/club';

@Injectable({
    providedIn: 'root'
})
export class ClubGateway {

    readonly endpoint: string = 'club/';

    constructor(private http: HttpClient) {
    }

    search(): Observable<Club[]> {
        return this.http.get<Club[]>(environment.baseUrl + this.endpoint + 'search');
    }

}
