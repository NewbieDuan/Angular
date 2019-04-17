import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDesComponent } from './game-des.component';

describe('GameDesComponent', () => {
  let component: GameDesComponent;
  let fixture: ComponentFixture<GameDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
