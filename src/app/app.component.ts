import { Component } from '@angular/core';
import colorArray from './colorsUtile';
import GameBoard from './gameEngine/board';
import Algorithm from './gameEngine/algorithm';
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
  solAlgorithm: Algorithm;
  constructor() {
    this.gameBoards = new Array<GameBoard>();
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.initBoard();
    this.currentColor = tempBoard.sourceTile.color;
    this.gameBoards.push(tempBoard);
    this.solAlgorithm = new Algorithm();
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
   this.solAlgorithm.backtrackAlgo(this.gameBoards[0], this.colorsPanel);
   console.log(this.solAlgorithm.solution);
   this.gameBoards = this.gameBoards.concat(this.solAlgorithm.solution.map(item => item.board));
  }
  colorElemHandler(color: string): void {
    const tempBoard = this.gameBoards[this.gameBoards.length - 1].copyBoard();
    tempBoard.setTileSourceColor(color);
    console.log(this.gameBoards[this.gameBoards.length - 1].isTheSame(tempBoard) );
    this.gameBoards.push(tempBoard);
  }
}
