import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserAthenaSearchPersonComponent} from './user-athena-search-person.component';

describe('UserAthenaSearchPersonComponent', () => {
    let component: UserAthenaSearchPersonComponent;
    let fixture: ComponentFixture<UserAthenaSearchPersonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAthenaSearchPersonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAthenaSearchPersonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
