export default class Tile {
  color:  string;
  xCor: number;
  yCor: number;
  visited: boolean;
  constructor(tileColor) {
    this.color = tileColor;
    this.xCor = -1;
    this.yCor = -1;
    this.visited = false;
  }
  public setColor(newColor: string): void {
    this.color = newColor;
  }
}
