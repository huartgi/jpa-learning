import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAthenaComponent} from './user-athena.component';

describe('UserAthenaComponent', () => {
    let component: UserAthenaComponent;
    let fixture: ComponentFixture<UserAthenaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAthenaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAthenaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
