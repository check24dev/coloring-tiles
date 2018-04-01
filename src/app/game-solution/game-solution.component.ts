import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-solution',
  templateUrl: './game-solution.component.html',
  styleUrls: ['./game-solution.component.css']
})
export class GameSolutionComponent implements OnInit {
  @Input() solution: any;
  constructor() { }

  ngOnInit() {
  }

}
