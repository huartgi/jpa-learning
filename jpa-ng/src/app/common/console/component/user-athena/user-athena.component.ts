import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../user/model/user';
import {ConsoleService} from '../../service/console.service';
import {UserAthenaViewComponent} from './user-athena-view/user-athena-view.component';

@Component({
    selector: 'app-user-athena',
    templateUrl: './user-athena.component.html',
    styleUrls: ['./user-athena.component.scss']
})
export class UserAthenaComponent implements OnInit {

    currentStep = 1;    // Current step (1 or 2)
    person: User;     // Person we want to view the User of

    // @ViewChild('viewUser', {read: false, static: false}) viewUser: UserAthenaViewComponent;
    @ViewChild('viewUser', {read: false, static: true}) viewUser: UserAthenaViewComponent;

    constructor(private consoleService: ConsoleService) {
    }

    ngOnInit() {
    }

    /** Executed when a person is selected in step 1 */
    personSelected(person: User) {
        console.log('person: ' + JSON.stringify(person));
        console.log(this.viewUser === undefined);
        this.person = person;
        this.viewUser.person = person;
        console.log('this.viewUser.person: ' + JSON.stringify(this.viewUser.person));
        document.getElementById('btnStep2').click();
        console.log('button clicked');
        if (person) {
            this.currentStep = 2;
        } else {
            this.currentStep = 1;
        }
        console.log('step set');
        console.log('invoking web service readUser');
        this.consoleService.readUser(this.person.code).subscribe(data => {
            console.log('user: ' + JSON.stringify(data));
            this.viewUser.user = data;
            console.log('user: ' + JSON.stringify(this.viewUser.user));
            console.log('web service readUser invoked');
        });
    }

}
