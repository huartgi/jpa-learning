import {Component, OnInit} from '@angular/core';
import {SvgIcon} from '../../../../svg/svg-icon.enum';
import {User} from '../../../../user/model/user';
import {AthenaUser} from '../../../model/athena-user';
import {ConsoleService} from '../../../service/console.service';

@Component({
    selector: 'app-user-athena-view',
    templateUrl: './user-athena-view.component.html',
    styleUrls: ['./user-athena-view.component.scss']
})
export class UserAthenaViewComponent implements OnInit {

    person: User = new User();     // Person we want to view the User of
    user: AthenaUser;

    constructor(private consoleService: ConsoleService) {
    }

    get SvgIcon() {
        return SvgIcon;
    }

    ngOnInit() {
    }


}
