import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSolutionComponent } from './game-solution.component';

describe('GameSolutionComponent', () => {
  let component: GameSolutionComponent;
  let fixture: ComponentFixture<GameSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
