import {Person} from '../../../business/person/domain/person';

export class Audit {
    createdBy: Person;
    createdOn: Date;
    modifiedBy: Person;
    modifiedOn: Date;
}
