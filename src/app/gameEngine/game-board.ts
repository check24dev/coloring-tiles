import Tile from './tile';
import colorArray from '../colorsUtile';
export default class GameBoard {
  boardDim: number;
  colorsNumber: number;
  sourceTile: Tile;
  board: Tile[][];


  constructor(boardDim: number, colorsNumber: number) {
   this.boardDim = boardDim;
   this.colorsNumber = colorsNumber;
   this.board = new Array(this.boardDim);
   for (let i = 0; i < this.boardDim; i++) {
     this.board[i] = new Array(this.boardDim);
   }
   this.sourceTile = null;
 }
 initBoard(): void {
   for (let i = 0; i < this.boardDim; i++) {
     for (let j = 0; j < this.boardDim; j++) {
       let randomColor = Math.floor((Math.random() * this.colorsNumber) + 1);
       let tileColor = colorArray[randomColor];
       let tempTile = new Tile(tileColor);
       tempTile.xCor = i;
       tempTile.yCor = j;
       this.board[i][j] = tempTile;
     }
   }
   this.buildBoard();
   this.sourceTile = this.board[0][0];
 }
 buildBoard(): void {
   for (let i = 0; i < this.boardDim; i++) {
     for (let j = 0; j < this.boardDim; j++) {
       if (i === 0 && j === 0) {
         this.board[i][j].north = null;
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = this.board[i + 1][j];
         this.board[i][j].west = null;
       }
       if (i > 0 && j > 0 && i < this.boardDim - 1 && j < this.boardDim - 1) {
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = this.board[i + 1][j];
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i > 0 && j === 0 && i < this.boardDim - 1 && j < this.boardDim - 1) {
         this.board[i][j].west = null;
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = this.board[i + 1][j];
       }
       if (i === 0 && j > 0 && i < this.boardDim - 1 && j < this.boardDim - 1) {
         this.board[i][j].north = null;
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = this.board[i + 1][j];
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i > 0 && j > 0 && i === this.boardDim - 1 && j < this.boardDim - 1) {
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = null;
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i > 0 && j > 0 && i < this.boardDim - 1 && j === this.boardDim - 1) {
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = null;
         this.board[i][j].south = this.board[i + 1][j];
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i === this.boardDim - 1 && j === this.boardDim - 1) {
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = null;
         this.board[i][j].south = null;
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i === 0 && j === this.boardDim - 1) {
         this.board[i][j].north = null;
         this.board[i][j].east = null;
         this.board[i][j].south = this.board[i + 1][j];
         this.board[i][j].west = this.board[i][j - 1];
       }
       if (i === this.boardDim - 1 && j === 0) {
         this.board[i][j].north = this.board[i - 1][j];
         this.board[i][j].east = this.board[i][j + 1];
         this.board[i][j].south = null;
         this.board[i][j].west = null;
       }
     }
   }
 }
 printBoard() {
   for (let i = 0; i < this.boardDim; i++) {
     for (let j = 0; j < this.boardDim; j++) {
       this.board[i][j].printTile();
     }
     console.log('------------------');
   }
 }

}
