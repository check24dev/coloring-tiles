import { Component, OnInit, Input } from '@angular/core';
import Tile from '../gameEngine/tile';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;
  constructor() {
  }

  ngOnInit() {
  }
  tileClickHandler(): void{
    console.log(this.tile);
  }
  setTileBackground(): object {
    let styles = {
      'background-color': this.tile.color,
      'font-weight': (this.tile.xCor === 0 && this.tile.yCor === 0) ? 'bold' : 'normal',
      'border': (this.tile.xCor === 0 && this.tile.yCor === 0)? '1px solid #fff' : '1px solid #000',
    };
    return styles;
  }
}
