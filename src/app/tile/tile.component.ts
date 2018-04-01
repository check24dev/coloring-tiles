import { Component, OnInit, Input } from '@angular/core';
import Tile from '../gameEngine/tile';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;
  @Input() isSourceTile: boolean;
  constructor() { }

  ngOnInit() {
  }
  tileClickHandler(): void {
    console.log(this.tile);
  }
  setTileBackground(): object {
    const styles = {
      'background-color': this.tile.color,
    };
    return styles;
  }
  renderTile(): string {
    if (this.isSourceTile) {
      return `(${this.tile.xCor}, ${this.tile.yCor})`;
    }
    return `(!, !)`;
  }
}
