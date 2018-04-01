import { Component, OnInit } from '@angular/core';
import colorArray from '../colorsUtile';
import { GameService } from '../game.service';

@Component({
  selector: 'app-color-panel',
  templateUrl: './color-panel.component.html',
  styleUrls: ['./color-panel.component.css']
})
export class ColorPanelComponent implements OnInit {

  constructor(private gameService: GameService) {
    gameService.initColorPanel();
  }
  setBackgroundColor(color: string): object {
    const styles = {
      'background-color': color,
    };
    return styles;
  }
  ngOnInit() {
  }

}
