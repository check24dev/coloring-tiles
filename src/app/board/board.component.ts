import { Component, OnInit } from '@angular/core';
import Board from '../gameEngine/game-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  gameBoard: Board;
  colorsNumber: number = 3;
  boardDim: number = 4;
  currentColor: string;

  constructor() {
    this.gameBoard = new Board(this.boardDim, this.colorsNumber);
    this.gameBoard.initBoard();
    this.currentColor = this.gameBoard.sourceTile.color;
  }

  ngOnInit() {

  }
  initBoardHandler(): void {
    this.gameBoard = new Board(this.boardDim, this.colorsNumber);
    this.gameBoard.initBoard();

  }
  solveHandler(): void {
    console.log('Heelo');
  }
  
  colorElemHandler(color: string): void {
    console.log(color);
  }
}
