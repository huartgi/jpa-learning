import {Observable} from 'rxjs';

export interface BusinessRuleService {
    create(entity: any): Observable<any>;

    update(entity: any): Observable<any>;

    delete(id: any): Observable<any>;
}
