import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsUserComponent } from './main-contacts-user.component';

describe('MainContactsUserComponent', () => {
  let component: MainContactsUserComponent;
  let fixture: ComponentFixture<MainContactsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
