import {KeyValuePair} from '../../key-value-pair';
import {FilterInputTypeEnum} from '../filtering/filter-input-type.enum';
import {SortingDirectionEnum} from './sorting-direction.enum';

export declare class SortableColumn {
    name: string;
    title: string;
    direction: SortingDirectionEnum;
    bootstrapClass: string;
    filterInputType: FilterInputTypeEnum;
    values?: KeyValuePair[];
    sortable?: boolean;
    width?: string;

    constructor(name: string, title: string, direction: SortingDirectionEnum, bootstrapClass: string, filterInputType: FilterInputTypeEnum, values?: KeyValuePair[], sortable?: boolean, width?: string);

    toggleDirection(): void;
}
