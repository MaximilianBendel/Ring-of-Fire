
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game-config/game';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAppPlayerComponent } from '../dialog-app-player/dialog-app-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, DialogAppPlayerComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;
  cardStyles: { left: number, top: number, rotate: number }[] = [];

  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAppPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length >= 1) {
        this.game.players.push(name);
      }
    });
  }

ngOnInit(): void {
  this.newGame();
}

pickCard() {
  if (!this.pickCardAnimation) {
    const card = this.game.stack.pop();
    if (card !== undefined) {
      this.currentCard = card;
    }
    this.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;

    setTimeout(() => {
      this.pickCardAnimation = false;
      this.game.playedCard.push(this.currentCard);
      this.cardStyles.push({
        left: 110 + this.game.playedCard.length * 3,
        top: 10 + this.getRandomNumber() * 3,
        rotate: this.getRandomNumber() * 3
      });
    }, 1500);
  }
}

newGame() {
  this.game = new Game();
  console.log(this.game);
}

getRandomNumber(): number {
  return Math.random() * 10;
}
}