import { Component } from '@angular/core';
import colorArray from './colorsUtile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boardsArray = [];
  colorsPanel = [];
  colorsNumber = 4;
  constructor() {
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
  }

  ngOnInit() {
  }
  colorClickHandler(): void {
    for (let i = 0; i < this.colorsNumber; i++) {
      this.colorsPanel.push(colorArray[i + 1]);
    }
  }
  setColorDivBackground(color: string): object {
    let styles = {
      'background-color': color,
    };
    return styles;
  }
}
