import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board-control',
  templateUrl: './board-control.component.html',
  styleUrls: ['./board-control.component.css']
})
export class BoardControlComponent implements OnInit {
  dimensionOps = [
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
    {value: 6, viewValue: 6},
    {value: 7, viewValue: 7},
    {value: 8, viewValue: 8},
    {value: 9, viewValue: 9},
    {value: 10, viewValue: 10},
    {value: 11, viewValue: 11},
    {value: 12, viewValue: 12},
    {value: 13, viewValue: 13},
    {value: 14, viewValue: 14},
    {value: 15, viewValue: 15},
    {value: 16, viewValue: 16},
    {value: 17, viewValue: 17},
    {value: 18, viewValue: 18},
    {value: 19, viewValue: 19},
    {value: 20, viewValue: 20},
    {value: 21, viewValue: 21},
  ];
  colorOps = [
    {value: 2, viewValue: 2},
    {value: 3, viewValue: 3},
    {value: 4, viewValue: 4},
    {value: 5, viewValue: 5},
    {value: 6, viewValue: 6},
    {value: 7, viewValue: 7},
    {value: 8, viewValue: 8},
    {value: 9, viewValue: 9},
    {value: 10, viewValue: 10},
  ];
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
  }
}
