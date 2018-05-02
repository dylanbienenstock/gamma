import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsSearchComponent } from './main-contacts-search.component';

describe('MainContactsSearchComponent', () => {
  let component: MainContactsSearchComponent;
  let fixture: ComponentFixture<MainContactsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
