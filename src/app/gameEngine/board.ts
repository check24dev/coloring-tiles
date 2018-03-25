import Tile from './tile';
import colorArray from '../colorsUtile';
export default class GameBoard {
  boardDim: number;
  colorsNumber: number;
  sourceTile: Tile;
  board: Tile[][];
  sameColorTilesNumber: number;

  constructor(boardDim: number, colorsNumber: number) {
    this.boardDim = boardDim;
    this.colorsNumber = colorsNumber;
    this.board = new Array(this.boardDim);
    for (let i = 0; i < this.boardDim; i++) {
      this.board[i] = new Array(this.boardDim);
    }
    this.sourceTile = null;
    this.sameColorTilesNumber = 0;
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
    this.sameColorTilesNumber = 0;
  }
  setTileSourceColor(newColor: string): void {
    this.resetBoard();
    this.setTileColor(this.board[0][0], newColor);
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
      if ((i === 0) && (j === 0)) { // 9 up left
        if (this.board[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.board[i][j + 1], newColor);
        }
        if (this.board[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.board[i + 1][j], newColor);
        }
      }
    }
  }
  calculateConnectedTiles(tile: Tile, color): void {
    const i = tile.xCor;
    const j = tile.yCor;
    const n = this.boardDim - 1;
    if (tile.visited === false) {
      this.sameColorTilesNumber++;
      tile.visited = true;
      if ((0 < i && i < n) && (0 < j && j < n)) { // 8 _ _
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
      if ((0 < i && i < n) && (j === 0)) { // 1 left
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
      if (( i === n) && (j === 0)) { // 2 left down
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
      }
      if ((i === 0) && (0 < j && j < n)) { // 3 up
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
      if ((i === 0) && (j === n)) { // 4 up right
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
      if ((0 < i && i < n) && (j === n)) { // 5 right
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
      if ((i === n) && (j === n)) { // 6 right down
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
      }
      if ((i === n) && (0 < j && j < n)) { // 7 down
        if (this.board[i][j - 1].color === color) { // left
          this.calculateConnectedTiles(this.board[i][j - 1], color);
        }
        if (this.board[i - 1][j].color === color) { // up
          this.calculateConnectedTiles(this.board[i - 1][j], color);
        }
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
      }
      if ((i === 0) && (j === 0)) { // 9 up left
        if (this.board[i][j + 1].color === color) { // right
          this.calculateConnectedTiles(this.board[i][j + 1], color);
        }
        if (this.board[i + 1][j].color === color) { // down
          this.calculateConnectedTiles(this.board[i + 1][j], color);
        }
      }
    }
  }
  isFinished(): boolean {
    const sColor = this.board[0][0].color;
    for (let i = 0; i < this.boardDim; i++) {
      for (let j = 0; j < this.boardDim; j++) {
        if (this.board[i][j].color !== sColor) {
          return false;
        }
      }
    }
    return true;
  }
  isTheSame(boad: GameBoard): boolean {
    this.resetBoard();
    boad.resetBoard();
    this.calculateConnectedTiles(this.board[0][0], this.board[0][0].color);
    boad.calculateConnectedTiles(boad.board[0][0], boad.board[0][0].color);
    if (this.sameColorTilesNumber === boad.sameColorTilesNumber) {
      return true;
    }
    return false;
  }
  copyBoard(): GameBoard {
    const copyGameBoard = new GameBoard(this.boardDim, this.colorsNumber);
    copyGameBoard.board = this.board.map((item, index) => {
      return item.map((elem, ind) => Object.assign({}, elem));
    });
    return copyGameBoard;
  }
}
