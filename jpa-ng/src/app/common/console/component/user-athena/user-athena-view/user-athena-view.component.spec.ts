import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAthenaViewComponent} from './user-athena-view.component';

describe('UserAthenaViewComponent', () => {
    let component: UserAthenaViewComponent;
    let fixture: ComponentFixture<UserAthenaViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAthenaViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAthenaViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
