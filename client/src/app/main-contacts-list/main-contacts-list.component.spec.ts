import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsListComponent } from './main-contacts-list.component';

describe('MainContactsListComponent', () => {
  let component: MainContactsListComponent;
  let fixture: ComponentFixture<MainContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
