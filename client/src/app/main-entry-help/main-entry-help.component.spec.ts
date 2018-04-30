import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEntryHelpComponent } from './main-entry-help.component';

describe('MainEntryHelpComponent', () => {
  let component: MainEntryHelpComponent;
  let fixture: ComponentFixture<MainEntryHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEntryHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEntryHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
