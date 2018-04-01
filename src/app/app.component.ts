import { Component } from '@angular/core';
import { GameService } from './game.service';
  // import colorArray from './colorsUtile';
  import GameBoard from './gameEngine/board';
  import Algorithm from './gameEngine/algorithm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enjoy the Game';
  colorsPanel = [];
  colorsNumber = 4;
  gameBoards: any;
  boardDim = 8;
  currentColor: string;
  solAlgorithm: Algorithm;
  constructor(private gameService: GameService) {
    gameService.initGame();
  }
}
