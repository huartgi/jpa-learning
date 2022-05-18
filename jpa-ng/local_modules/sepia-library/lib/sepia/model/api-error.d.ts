import {BackendErrorTypeEnum} from './backend-error-type.enum';

export declare class ApiError {
    timestamp: string;
    errorKeys: string[];
    backendErrorType: BackendErrorTypeEnum;
}
