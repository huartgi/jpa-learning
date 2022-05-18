import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BusinessRuleService} from 'sepia-library';
import {environment} from '../../../../environments/environment';
import {SamlHttpClient} from '../../http-client/saml-http-client.service';
import {User} from '../model/user';
import {UserCriteria} from './user-criteria';

@Injectable({
    providedIn: 'root'
})
// TODO Review : shouldn't it be named UserGateway ?
export class UserService implements BusinessRuleService {

    private BASE_URL = 'user';

    constructor(private http: SamlHttpClient) {
    }

    findByCriteria(criteria: UserCriteria): Observable<User[]> {
        return this.http.post<User[]>(environment.baseUrl + this.BASE_URL + '/search', criteria);
    }

    countByCriteria(criteria: UserCriteria): Observable<number> {
        return this.http.post<number>(environment.baseUrl + this.BASE_URL + '/count', criteria);
    }

    find(code: string): Observable<User> {
        return this.http.get<User>(environment.baseUrl + this.BASE_URL + '/' + code);
    }

    update(person: User): Observable<any> {
        return this.http.patch<User>(environment.baseUrl + this.BASE_URL, person);
    }

    create(person: User): Observable<User> {
        return this.http.post<User>(environment.baseUrl + this.BASE_URL, person);
    }

    delete(person: User): Observable<any> {
        return this.http.delete<User>(environment.baseUrl + this.BASE_URL + '/' + person.code);
    }

}
