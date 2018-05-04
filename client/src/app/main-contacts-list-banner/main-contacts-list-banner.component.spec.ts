import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsListBannerComponent } from './main-contacts-list-banner.component';

describe('MainContactsListBannerComponent', () => {
  let component: MainContactsListBannerComponent;
  let fixture: ComponentFixture<MainContactsListBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsListBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsListBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
