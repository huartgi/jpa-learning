import {GenericCriteria} from 'sepia-library';

export class UserCriteria extends GenericCriteria {

    code: string;
    firstName: string;
    lastName: string;
    email: string;

    isEmpty() {
        return !this.code && !this.firstName && !this.lastName && !this.email;
    }

}

