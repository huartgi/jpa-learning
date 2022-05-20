import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthorizationsCompareComponent} from './authorizations-compare.component';

describe('AuthorizationsCompareComponent', () => {
    let component: AuthorizationsCompareComponent;
    let fixture: ComponentFixture<AuthorizationsCompareComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorizationsCompareComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizationsCompareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
