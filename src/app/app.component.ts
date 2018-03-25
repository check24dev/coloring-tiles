import { Component } from '@angular/core';
import colorArray from './colorsUtile';
import GameBoard from './gameEngine/board';
import Algorithm from './gameEngine/algorithm';

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
  gameBoards: any;
  boardDim = 4;
  currentColor: string;
  solAlgorithm: Algorithm;
  constructor() {
    // this.gameBoards = new Array<GameBoard>();
    
    this.colorClickHandler();
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.initBoard();
    this.currentColor = tempBoard.sourceTile.color;
    this.solAlgorithm = new Algorithm();
    this.gameBoards = { startPoint: tempBoard, aStar: [], backTrack: [], humanMoves: [] };
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
    this.gameBoards.aStar = new Array<GameBoard>();
    this.gameBoards.backTrack = new Array<GameBoard>();
    this.gameBoards.humanMoves = new Array<GameBoard>();
    this.solAlgorithm = new Algorithm();
    const tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    tempBoard.initBoard();
    this.currentColor = tempBoard.sourceTile.color;
    this.gameBoards.startPoint = tempBoard;
    this.colorsPanel = [];
    this.colorClickHandler();
  }
  solveAStarHandler(): void {
    let someVar = this.solAlgorithm.AstarAlgo(this.gameBoards.startPoint, this.colorsPanel);
    this.gameBoards.aStar = someVar;
  }
  solveBackTrackHandler(): void {
    this.solAlgorithm.backtrackAlgo(this.gameBoards.startPoint, this.colorsPanel);
    this.gameBoards.backTrack = this.solAlgorithm.solution.map(item => item.board);
  }
  colorElemHandler(color: string): void {
    let tempBoard = null;
    if(this.gameBoards.humanMoves.length === 0) {
      tempBoard = this.gameBoards.startPoint.copyBoard();
    } else {
      tempBoard = this.gameBoards.humanMoves[this.gameBoards.humanMoves.length - 1].copyBoard();
    }
    tempBoard.setTileSourceColor(color);
    this.gameBoards.humanMoves.push(tempBoard);
  }
}
