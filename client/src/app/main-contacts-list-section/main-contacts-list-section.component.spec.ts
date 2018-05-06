import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsListSectionComponent } from './main-contacts-list-section.component';

describe('MainContactsListSectionComponent', () => {
  let component: MainContactsListSectionComponent;
  let fixture: ComponentFixture<MainContactsListSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsListSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
