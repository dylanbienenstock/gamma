import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsSearchresultsComponent } from './main-contacts-searchresults.component';

describe('MainContactsSearchresultsComponent', () => {
  let component: MainContactsSearchresultsComponent;
  let fixture: ComponentFixture<MainContactsSearchresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsSearchresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsSearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
