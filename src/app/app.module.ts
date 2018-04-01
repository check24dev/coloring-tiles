import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { BoardComponent } from './board/board.component';
import { BoardControlComponent } from './board-control/board-control.component';
import { ColorPanelComponent } from './color-panel/color-panel.component';
import { GameSolutionComponent } from './game-solution/game-solution.component';

import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    BoardComponent,
    BoardControlComponent,
    ColorPanelComponent,
    GameSolutionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
