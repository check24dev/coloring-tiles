import { Component } from '@angular/core';
import colorArray from './colorsUtile';
import Board from './gameEngine/game-board';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boardsArray = [];
  colorsPanel = [];
  colorsNumber = 4;
  gameBoards: Array<Board>;
  boardDim = 4;
  currentColor: string;
  constructor() {
    this.gameBoards = new Array<Board>();
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
    const tempGameBoard = new Board(this.boardDim, this.colorsNumber);
    tempGameBoard.initBoard();
    this.currentColor = tempGameBoard.sourceTile.color;
    this.gameBoards.push(tempGameBoard);
  }
  colorClickHandler(): void {
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
  }
  setColorDivBackground(color: string): object {
    const styles = {
      'background-color': color,
    };
    return styles;
  }
  initBoardHandler(): void {
    this.gameBoards[0] = new Board(this.boardDim, this.colorsNumber);
    this.gameBoards[0].initBoard();

  }
  solveHandler(): void {
    const tempGameBoard = new Board(this.boardDim, this.colorsNumber);
    tempGameBoard.initBoard();
    this.currentColor = tempGameBoard.sourceTile.color;
    this.gameBoards.push(tempGameBoard);
  }
  colorElemHandler(color: string): void {
    console.log(color);
  }
}
