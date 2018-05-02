import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsStatusComponent } from './main-contacts-status.component';

describe('MainContactsStatusComponent', () => {
  let component: MainContactsStatusComponent;
  let fixture: ComponentFixture<MainContactsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
