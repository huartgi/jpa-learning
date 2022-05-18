export class AthenaUser {

    login: string;
    iup: string;
    firstname: string;
    lastname: string;
    email: string;
    creationDate: Date;
    modificationDate: Date;
    isActive: boolean;
    isAllowed: boolean;
    profiles = new Array<string>();
    otherProfiles = new Array<string>();
    authorizations = new Array<string>();
}
