import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthorizationEnum} from '../../../auth/model/authorization.enum';
import {SvgIcon} from '../../../svg/svg-icon.enum';
import {Matrix} from '../../model/matrix';
import {ConsoleService} from '../../service/console.service';

@Component({
    selector: 'app-authorizations',
    templateUrl: './authorizations.component.html',
    styleUrls: ['./authorizations.component.scss']
})
export class AuthorizationsComponent implements OnInit {

    form: FormGroup;

    public matrix: Matrix;

    constructor(private consoleService: ConsoleService,
                private modalService: NgbModal,
                protected formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
        this.consoleService.getMatrix().subscribe(data => {
            this.matrix = data;
        });
    }

    initForm() {
        this.form = this.formBuilder.group({
            pwd: ['', [Validators.required]]
        });
    }

    reload() {
        this.consoleService.reloadMatrix().subscribe(data => {
            this.matrix = data;
        });
    }

    open(modal) {
        this.router.navigate(['/console/matrix/compare']);
    }

    get SvgIcon() {
        return SvgIcon;
    }

    get Authorization() {
        return AuthorizationEnum;
    }

}
