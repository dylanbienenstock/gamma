import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatTabsComponent } from './main-chat-tabs.component';

describe('MainChatTabsComponent', () => {
  let component: MainChatTabsComponent;
  let fixture: ComponentFixture<MainChatTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
