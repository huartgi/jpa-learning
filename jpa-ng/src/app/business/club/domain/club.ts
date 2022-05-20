import {Country} from './country';
import {Match} from './match';
import {Player} from './player';
import {Stadium} from './stadium';

export class Club {
    id: string;
    name: string;
    country: Country;
    stadium: Stadium;
    players: Player[];
    matchesHome: Match[];
    matchesAway: Match[];
}
