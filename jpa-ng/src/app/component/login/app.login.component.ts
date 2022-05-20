import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from 'primeng/api';
import {environment} from '../../../environments/environment';
import {AuthRequest} from '../../common/auth/model/auth-request';
import {AuthService} from '../../common/auth/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {

    form: FormGroup;
    returnUrl: string;
    submitted: boolean;
    capsOn: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private messageService: MessageService) {
    }

    ngOnInit() {

        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

        if (localStorage.getItem(environment.tokenStorage)) {
            // already logged in so redirect to origin or home page
            this.router.navigate([this.returnUrl]);
        }


        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        const authRequest: AuthRequest = new AuthRequest();
        authRequest.username = this.f.username.value;
        authRequest.password = this.f.password.value;
        this.authService.login(authRequest).subscribe(() => {
            // Log in into source environment to maybe import subscriptions if successfully login into the current one
            this.authService.loginIntoSourceEnvironment(authRequest).subscribe(() => true);

            this.router.navigate([this.returnUrl]);
        });


    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

}
