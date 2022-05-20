import {AuthorizationEnum} from './authorization.enum';
import {ProfileEnum} from './profile.enum';

export class User {
    iup: string;
    firstName: string;
    lastName: string;
    profiles: ProfileEnum[];
    authorizations: AuthorizationEnum[];
}
