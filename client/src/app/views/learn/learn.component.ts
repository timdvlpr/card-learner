import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../components/card/card.service';
import { Card } from '../../components/card/card.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnDestroy {

  id = '';
  cards: Card[] = [];
  currentCardIndex = 0;
  subRoute: Subscription;
  showAnswer = false;

  constructor(
    private route: ActivatedRoute,
    public cardService: CardService
  ) {
    this.subRoute = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.cardService.getCardsInStack(Number(this.id))
        .then(() => {
          this.cards = this.cardService.cards;
        })
        .catch(() => this.cards = []);
    });
  }

  showNextCard(): void {
    if (this.currentCardIndex + 1 < this.cards.length) {
      this.currentCardIndex++;
      this.resetCardState();
    }
  }

  showPreviousCard(): void {
    if (this.currentCardIndex !== 0) {
      this.currentCardIndex--;
      this.resetCardState();
    }
  }

  toggleCard(showAnswer: boolean): void {
    this.showAnswer = showAnswer;
  }

  resetCardState(): void {
    this.showAnswer = false;
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }

}
