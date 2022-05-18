import {Club} from './club';
import {Country} from './country';

export class Player {
    id: string;
    name: string;
    country: Country;
    club: Club;
    birthdate: Date;
}
