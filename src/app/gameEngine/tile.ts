export default class Tile {
  color:  string;
  north: Tile;
  east: Tile;
  south: Tile;
  west: Tile;
  xCor: number;
  yCor: number;
  visited: boolean;
  constructor(color: string) {
    this.color = color;
    this.north = null;
    this.east = null;
    this.south = null;
    this.west = null;
    this.xCor = 0;
    this.yCor = 0;
    this.visited = false;
  }
  public printTile(): void {
    console.log(this.color);
    console.log(this.north);
    console.log(this.east);
    console.log(this.south);
    console.log(this.west);
  }
  public setColor(newColor: string): void {
    this.color = newColor;
  }
}
