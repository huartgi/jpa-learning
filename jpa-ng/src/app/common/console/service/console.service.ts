import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SamlHttpClient} from '../../http-client/saml-http-client.service';
import {AthenaUser} from '../model/athena-user';
import {Matrix} from '../model/matrix';

@Injectable({
    providedIn: 'root'
})
export class ConsoleService {

    private BASE_URL = 'console';

    constructor(private http: SamlHttpClient) {
    }

    getMatrix(): Observable<Matrix> {
        return this.http.get<Matrix>(environment.baseUrl + this.BASE_URL + '/matrix/view');
    }

    reloadMatrix(): Observable<Matrix> {
        return this.http.get<Matrix>(environment.baseUrl + this.BASE_URL + '/matrix/reload');
    }

    compareMatrix(pass: string): Observable<any> {
        return this.http.post<any>(environment.baseUrl + this.BASE_URL + '/matrix/compare', pass);
    }

    readUser(iup: string): Observable<AthenaUser> {
        return this.http.get<AthenaUser>(environment.baseUrl + this.BASE_URL + '/athena/user/' + iup);
    }

}
