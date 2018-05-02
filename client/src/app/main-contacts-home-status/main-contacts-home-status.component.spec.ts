import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsHomeStatusComponent } from './main-contacts-home-status.component';

describe('MainContactsHomeStatusComponent', () => {
  let component: MainContactsHomeStatusComponent;
  let fixture: ComponentFixture<MainContactsHomeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsHomeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsHomeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
