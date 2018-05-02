import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsHomeYouComponent } from './main-contacts-home-you.component';

describe('MainContactsHomeYouComponent', () => {
  let component: MainContactsHomeYouComponent;
  let fixture: ComponentFixture<MainContactsHomeYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsHomeYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsHomeYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
