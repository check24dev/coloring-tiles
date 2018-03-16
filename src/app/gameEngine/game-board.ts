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
       const randomColor = Math.floor((Math.random() * this.colorsNumber) + 1);
       const tileColor = colorArray[randomColor];
       const tempTile = new Tile(tileColor);
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

 setTileColorNearSource(newColor: string): void {
   this.board[0][1].color = newColor;
   this.board[1][0].color = newColor;
 }
 setTileColor(tile: Tile, newColor: string): any {
  if (tile.xCor !== 0 || tile.yCor !== 0) {
    tile.color = newColor;
    tile.visited = true;
  }
  if (tile.east !== null) {
    tile.east.color = newColor;
    console.log('east', newColor);
  }
  if (tile.west !== null) {
    tile.west.color = newColor;
    console.log('west', newColor);
  }
  if (tile.north !== null) {
    tile.north.color = newColor;
    console.log('north', newColor);
  }
  if (tile.south !== null) {
    tile.south.color = newColor;
    console.log('south', newColor);
  }
 }
}
