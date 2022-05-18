import {Component, Input, OnInit} from '@angular/core';
import {SvgIcon} from '../svg-icon.enum';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

    @Input() type: SvgIcon;
    @Input() width = '1em';
    @Input() height = '1em';

    constructor() {
    }

    get SvgIcon() {
        return SvgIcon;
    }

    ngOnInit() {
    }

}
