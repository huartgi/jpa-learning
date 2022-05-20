import {Club} from './club';

export class Match {
    id: string;
    clubHome: Club;
    goalHome: number;
    clubAway: Club;
    goalAway: number;
}
