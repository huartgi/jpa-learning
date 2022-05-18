import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SamlHttpClient} from '../../http-client/saml-http-client.service';
import {User} from '../model/user';
import {UserCriteria} from './user-criteria';

@Injectable({
    providedIn: 'root'
})
export class AthenaUserService {

    private BASE_URL = 'athena-user';

    constructor(private http: SamlHttpClient) {
    }

    findByCriteria(criteria: UserCriteria): Observable<User[]> {
        return this.http.post<User[]>(environment.baseUrl + this.BASE_URL + '/search', criteria);
    }

}
