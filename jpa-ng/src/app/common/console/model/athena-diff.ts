import {MappingDiff} from './mapping-diff';
import {Operation} from './operation.enum';

export class AthenaDiff {

    profiles: Map<string, Operation>;
    authorizations: Map<string, Operation>;
    mappings: Array<MappingDiff>;

}
