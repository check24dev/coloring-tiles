import { Component, OnInit, Input } from '@angular/core';
import GameBoard from '../gameEngine/game-board';

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
}
