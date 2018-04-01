import { Component, OnInit, Input } from '@angular/core';
import GameBoard from '../gameEngine/board';
import Tile from '../gameEngine/tile';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() gameBoard: GameBoard;
  constructor() {
  }

  ngOnInit() {
  }
  isSourceTile(tile: Tile): boolean {
    if (tile.xCor === this.gameBoard.sourceTile.xCor && tile.yCor === this.gameBoard.sourceTile.yCor) {
      return true;
    }
    return false;
  }
}
