import { Injectable } from '@angular/core';

import colorArray from './colorsUtile';
import GameBoard from './gameEngine/board';
import AStarAlgo from './gameEngine/aStarAlgo';
import BacktrackAlgo from './gameEngine/backtrackAlgo';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class GameService {
  colorsPanel = [];
  isColorPanelDisabled = false;
  colorsNumber = 4;
  boardDim = 4;
  startBoard: GameBoard;
  humanMoves = [];
  aStarAlgo: AStarAlgo;
  backtrackAlgo: BacktrackAlgo;
  constructor(public snackBar: MatSnackBar) { }
  initColorPanel(): void {
    this.colorsPanel = [];
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i]);
    }
  }
  setColorNumber(colorNum: number): void {
    this.colorsNumber = colorNum;
  }
  setBoardDim(dim: number): void {
    this.boardDim = dim;
  }
  initGame(): void {
    this.startBoard = new GameBoard(this.boardDim, this.colorsNumber);
    this.startBoard.init();
    this.initColorPanel();
    this.aStarAlgo = new AStarAlgo();
    this.backtrackAlgo = new BacktrackAlgo();
    this.humanMoves = [];
    this.humanMoves.push(this.startBoard);
    this.isColorPanelDisabled = false;
  }
  panelColorClicked(color: string): void {
    let tempBoard = new GameBoard(this.boardDim, this.colorsNumber);
    if (this.humanMoves.length === 0) {
      tempBoard = this.startBoard.copy();
    } else {
      tempBoard = this.humanMoves[this.humanMoves.length - 1].copy();
    }
    tempBoard.setSourceColor(color);
    this.humanMoves.push(tempBoard);
    if (tempBoard.isFullyColored() === true) {
      this.isColorPanelDisabled = true;
      this.snackBar.open(' !!لجين', 'برافو', {
        duration: 4000,
      });
    }
  }
  solveAStarClicked(): void {
    this.aStarAlgo.solve(this.startBoard, this.colorsPanel);
  }
  solveBackTrackClicked(): void {
    this.backtrackAlgo.solve(this.startBoard, this.colorsPanel);
  }
}
