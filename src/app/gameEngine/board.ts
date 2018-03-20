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
    this.sourceTile = this.board[0][0];
  }
  resetBoard(): void {
    for (let i = 0; i < this.boardDim; i++) {
      for (let j = 0; j < this.boardDim; j++) {
        this.board[i][j].visited = false;
      }
    }
  }
  setTileSourceColor(newColor: string): void {
    this.board[0][0].color = newColor;
    this.setTileColor(this.board[0][1], newColor);
    this.setTileColor(this.board[1][0], newColor);
  }
  setTileColor(tile: Tile, newColor: string): void {
    const x = tile.xCor;
    const y = tile.yCor;
    const oldColor = tile.color;
    console.log(tile);
    if (this.board[x + 1][y].visited === false) {
      this.setNeaborTileColor(this.board[x + 1][y], oldColor, newColor);
    }
    if (this.board[x - 1][y].visited === false) {
      this.setNeaborTileColor(this.board[x - 1][y], oldColor, newColor);
    }
    if (this.board[x][y + 1].visited === false) {
      this.setNeaborTileColor(this.board[x][y + 1], oldColor, newColor);
    }
    if (this.board[x][y - 1].visited === false) {
      this.setNeaborTileColor(this.board[x][y - 1], oldColor, newColor);
    }
    if (x === 0 && y === 0) {
      tile.color = newColor;
      tile.visited = true;
    }
  }
  setNeaborTileColor(tile: Tile, oldColor: string, newColor: string): void {
    const x = tile.xCor;
    const y = tile.yCor;
    if (x < this.boardDim && y < this.boardDim) {
      if (this.board[x][y].color === oldColor) {
        this.setTileColor(this.board[x][y], newColor);
      }
    }
  }
}
