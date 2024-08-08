
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game-config/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;
  cardStyles: { left: number, top: number, rotate: number }[] = [];


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

      setTimeout(() => {
        this.pickCardAnimation = false;
        this.game.playedCard.push(this.currentCard);
        this.cardStyles.push({
          left: 110 + this.game.playedCard.length * 3,
          top: 10 + this.getRandomNumber()*3,
          rotate: this.getRandomNumber()*3
        });
        console.log(this.game.playedCard);
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




