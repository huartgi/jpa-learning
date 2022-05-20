import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AthenaDiff} from '../../../model/athena-diff';
import {ConsoleService} from '../../../service/console.service';

@Component({
    selector: 'app-authorizations-compare',
    templateUrl: './authorizations-compare.component.html',
    styleUrls: ['./authorizations-compare.component.scss']
})
export class AuthorizationsCompareComponent implements OnInit {

    form: FormGroup;
    athenaDiff: AthenaDiff;

    constructor(private consoleService: ConsoleService,
                protected formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            pwd: ['', [Validators.required]]
        });
    }

    compare() {
        const pwd = this.form.controls.pwd.value;
        this.consoleService.compareMatrix(pwd).subscribe(data => {
            this.athenaDiff = data;
        });
    }

    cancel() {
        this.router.navigate(['/console/matrix/compare']);
    }
}
