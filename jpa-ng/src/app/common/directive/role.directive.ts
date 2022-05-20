import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthorizationEnum} from '../auth/model/authorization.enum';
import {AuthService} from '../auth/service/auth.service';

@Directive({
    selector: '[appHasRole]'
})
export class RoleDirective implements OnInit {

    isVisible = false;
    @Input() appHasRole: AuthorizationEnum;

    constructor(
        // The element container where the templateRef will be rendered in
        private viewContainerRef: ViewContainerRef,
        // The element to be rendered
        private templateRef: TemplateRef<any>,
        // The authentication service that returns the current user context
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        if (!this.authService.currentAuthTokenValue.authorizations) {
            this.viewContainerRef.clear();
        }

        for (const authorization of this.authService.currentAuthTokenValue.authorizations) {
            if (!this.isVisible && authorization === this.appHasRole) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        }

        if (!this.isVisible) {
            this.viewContainerRef.clear();
            this.isVisible = false;
        }
    }

}
