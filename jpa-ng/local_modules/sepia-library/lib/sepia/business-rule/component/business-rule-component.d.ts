import {Observable} from 'rxjs';
import {ApiError} from '../../model/api-error';
import {BusinessRuleService} from '../service/business-rule-service';

export declare class BusinessRuleComponent {
    private service;
    withErrors: boolean;
    errorKeys: string[];

    constructor(service: BusinessRuleService);

    init(): void;

    create(entity: any): Observable<any>;

    update(entity: any): Observable<any>;

    delete(id: any): Observable<any>;

    handleError(apiError: ApiError): Observable<never>;
}
