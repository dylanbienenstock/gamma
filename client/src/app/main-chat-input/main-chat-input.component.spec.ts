import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatInputComponent } from './main-chat-input.component';

describe('MainChatInputComponent', () => {
  let component: MainChatInputComponent;
  let fixture: ComponentFixture<MainChatInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainChatInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
