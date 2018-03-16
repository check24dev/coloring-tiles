import { Component } from '@angular/core';
import colorArray from './colorsUtile';
import Board from './gameEngine/game-board';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enjoy the Game';
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
    for (let i = 0; i < this.boardDim; i++) {
      for (let j = 0; j < this.boardDim; j++) {
        tempGameBoard.board[i][j] = Object.assign({}, this.gameBoards[this.gameBoards.length - 1].board[i][j]);
        tempGameBoard.board[i][j].west = Object.assign({}, this.gameBoards[this.gameBoards.length - 1].board[i][j].west);
        tempGameBoard.board[i][j].east = Object.assign({}, this.gameBoards[this.gameBoards.length - 1].board[i][j].east);
        tempGameBoard.board[i][j].north = Object.assign({}, this.gameBoards[this.gameBoards.length - 1].board[i][j].north);
        tempGameBoard.board[i][j].south = Object.assign({}, this.gameBoards[this.gameBoards.length - 1].board[i][j].south);
      }
    }
    console.log(this.gameBoards[this.gameBoards.length - 1], tempGameBoard);
    tempGameBoard.setTileColor(tempGameBoard.board[0][2], this.colorsPanel[0]);
    this.gameBoards.push(tempGameBoard);
  }
  colorElemHandler(color: string): void {
    this.gameBoards[this.gameBoards.length - 1].setTileColorNearSource(color);
  }
}
