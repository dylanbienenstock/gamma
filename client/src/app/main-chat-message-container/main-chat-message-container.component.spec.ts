import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatMessageContainerComponent } from './main-chat-message-container.component';

describe('MainChatMessageContainerComponent', () => {
  let component: MainChatMessageContainerComponent;
  let fixture: ComponentFixture<MainChatMessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatMessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatMessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
