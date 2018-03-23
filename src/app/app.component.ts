import { Component } from '@angular/core';
import colorArray from './colorsUtile';
import GameBoard from './gameEngine/board';
import { Map, List } from 'immutable';

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
  gameBoards: Array<GameBoard>;
  boardDim = 4;
  currentColor: string;
  constructor() {
    this.gameBoards = new Array<GameBoard>();
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.initBoard();
    this.currentColor = tempBoard.sourceTile.color;
    this.gameBoards.push(tempBoard);
    // console.log(this.gameBoards[0].get('board'));
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
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.initBoard();
    this.currentColor = tempBoard.sourceTile.color;
    this.gameBoards[0] = tempBoard;
  }
  solveHandler(): void {
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.board = this.gameBoards[this.gameBoards.length - 1].board.map((item, index) => {
      return item.map((elem, ind) => Object.assign({}, elem));
    });
    tempBoard.setTileColor(tempBoard.board[0][2], this.colorsPanel[0]);
    this.gameBoards.push(tempBoard);
  }
  colorElemHandler(color: string): void {
    const tempBoard = this.gameBoards[this.gameBoards.length - 1].copyBoard();
    tempBoard.setTileSourceColor(color);
    console.log(this.gameBoards[this.gameBoards.length - 1].isTheSame(tempBoard) );
    this.gameBoards.push(tempBoard);
  }
}
