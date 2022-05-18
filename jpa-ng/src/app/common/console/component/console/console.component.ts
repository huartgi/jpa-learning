import {Component, OnInit} from '@angular/core';
import {AuthorizationEnum} from '../../../auth/model/authorization.enum';

@Component({
    selector: 'app-console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    get Authorization() {
        return AuthorizationEnum;
    }

}
