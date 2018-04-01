import Tile from './tile';
import colorArray from '../colorsUtile';
export default class Board {
  dim: number;
  colorsNumber: number;
  sourceTile: Tile;
  tiles: Tile[][];
  sourceConnectedTilesNumber: number;

  constructor(dim: number, colorsNumber: number) {
    this.dim = dim;
    this.colorsNumber = colorsNumber;
    this.tiles = new Array(this.dim);
    for (let i = 0; i < this.dim; i++) {
      this.tiles[i] = new Array(this.dim);
    }
    this.sourceConnectedTilesNumber = 0;
  }
  init(): void {
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        const randomColor = Math.floor((Math.random() * this.colorsNumber));
        const tileColor = colorArray[randomColor];
        const tempTile = new Tile(tileColor);
        tempTile.xCor = i;
        tempTile.yCor = j;
        this.tiles[i][j] = tempTile;
      }
    }
    const randomXcor = Math.floor((Math.random() * this.dim));
    const randomYcor = Math.floor((Math.random() * this.dim));
    this.sourceTile = new Tile(this.tiles[randomXcor][randomYcor].color);
    this.sourceTile.xCor = randomXcor;
    this.sourceTile.yCor = randomYcor;
  }
  reset(): void {
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        this.tiles[i][j].visited = false;
      }
    }
    this.sourceTile.visited = false;
    this.sourceConnectedTilesNumber = 0;
  }
  setSourceColor(newColor: string): void {
    this.reset();
    this.setTileColor(this.sourceTile, newColor);
  }
  setTileColor(tile: Tile, newColor: string): void {
    const i = tile.xCor;
    const j = tile.yCor;
    const n = this.dim - 1;
    if (tile.visited === false) {
      const oldColor = tile.color;
      tile.color = newColor;
      this.tiles[i][j].color = newColor;
      tile.visited = true;
      if ((0 < i && i < n) && (0 < j && j < n)) { // 8 _ _
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
      if ((0 < i && i < n) && (j === 0)) { // 1 left
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
      if (( i === n) && (j === 0)) { // 2 left down
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
      }
      if ((i === 0) && (0 < j && j < n)) { // 3 up
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
      if ((i === 0) && (j === n)) { // 4 up right
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
      if ((0 < i && i < n) && (j === n)) { // 5 right
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
      if ((i === n) && (j === n)) { // 6 right down
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
      }
      if ((i === n) && (0 < j && j < n)) { // 7 down
        if (this.tiles[i][j - 1].color === oldColor) { // left
          this.setTileColor(this.tiles[i][j - 1], newColor);
        }
        if (this.tiles[i - 1][j].color === oldColor) { // up
          this.setTileColor(this.tiles[i - 1][j], newColor);
        }
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
      }
      if ((i === 0) && (j === 0)) { // 9 up left
        if (this.tiles[i][j + 1].color === oldColor) { // right
          this.setTileColor(this.tiles[i][j + 1], newColor);
        }
        if (this.tiles[i + 1][j].color === oldColor) { // down
          this.setTileColor(this.tiles[i + 1][j], newColor);
        }
      }
    }
  }
  getSourceConnectedTilesNumber(): number {
    this.reset();
    this.calculateSameColorConnectedTiles(this.sourceTile, this.sourceTile.color);
    return this.sourceConnectedTilesNumber;
  }
  calculateSameColorConnectedTiles(tile: Tile, color): void {
    const i = tile.xCor;
    const j = tile.yCor;
    const n = this.dim - 1;
    if (tile.visited === false) {
      this.sourceConnectedTilesNumber++;
      tile.visited = true;
      if ((0 < i && i < n) && (0 < j && j < n)) { // 8 _ _
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
      if ((0 < i && i < n) && (j === 0)) { // 1 left
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
      if (( i === n) && (j === 0)) { // 2 left down
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
      }
      if ((i === 0) && (0 < j && j < n)) { // 3 up
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
      if ((i === 0) && (j === n)) { // 4 up right
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
      if ((0 < i && i < n) && (j === n)) { // 5 right
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
      if ((i === n) && (j === n)) { // 6 right down
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
      }
      if ((i === n) && (0 < j && j < n)) { // 7 down
        if (this.tiles[i][j - 1].color === color) { // left
          this.calculateSameColorConnectedTiles(this.tiles[i][j - 1], color);
        }
        if (this.tiles[i - 1][j].color === color) { // up
          this.calculateSameColorConnectedTiles(this.tiles[i - 1][j], color);
        }
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
      }
      if ((i === 0) && (j === 0)) { // 9 up left
        if (this.tiles[i][j + 1].color === color) { // right
          this.calculateSameColorConnectedTiles(this.tiles[i][j + 1], color);
        }
        if (this.tiles[i + 1][j].color === color) { // down
          this.calculateSameColorConnectedTiles(this.tiles[i + 1][j], color);
        }
      }
    }
  }
  isFullyColored(): boolean {
    const sColor = this.sourceTile.color;
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        if (this.tiles[i][j].color !== sColor) {
          return false;
        }
      }
    }
    return true;
  }
  isTheSame(board: Board): boolean {
    const currentTileNum = this.getSourceConnectedTilesNumber();
    const boardTileNum = board.getSourceConnectedTilesNumber();
    if (currentTileNum === boardTileNum) {
      return true;
    }
    return false;
  }
  copy(): Board {
    const copyBoard = new Board(this.dim, this.colorsNumber);
    copyBoard.tiles = this.tiles.map((item, index) => {
      return item.map((elem, ind) => Object.assign({}, elem));
    });
    copyBoard.sourceTile = Object.assign({}, this.sourceTile);
    return copyBoard;
  }
}
