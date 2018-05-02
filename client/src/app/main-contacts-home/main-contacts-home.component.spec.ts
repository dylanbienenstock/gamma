import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsHomeComponent } from './main-contacts-home.component';

describe('MainContactsHomeComponent', () => {
  let component: MainContactsHomeComponent;
  let fixture: ComponentFixture<MainContactsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
