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
    const i = tile.xCor;
    const j = tile.yCor;
    const n = this.boardDim - 1;
    if (tile.visited === false) {
      const oldColor = tile.color;
      tile.color = newColor;
      tile.visited = true;
      if ((0 < i && i < n) && (0 < j && j < n)) { // 8 _ _
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
      if ((0 < i && i < n) && (j === 0)) { // 1 left
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
      if (( i === n) && (j === 0)) { // 2 left down
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
      }
      if ((i === 0) && (0 < j && j < n)) { // 3 up
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
      if ((i === 0) && (j === n)) { // 4 up right
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
      if ((0 < i && i < n) && (j === n)) { // 5 right
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
      if ((i === n) && (j === n)) { // 6 right down
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
      }
      if ((i === n) && (0 < j && j < n)) { // 7 down
        if (this.board[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.board[i][j - 1], newColor);
        }
        if (this.board[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.board[i - 1][j], newColor);
        }
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
      }
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
