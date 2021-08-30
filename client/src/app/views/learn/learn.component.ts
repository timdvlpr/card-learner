import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../components/card/card.service';
import { Card } from '../../components/card/card.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnDestroy {

  slug = '';
  cards: Card[] = [];
  currentCardIndex = 0;
  subRoute: Subscription;
  showAnswer = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) {
    this.subRoute = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.cardService.getCardsInStack(this.slug)
        .then((cards: Card[]) => this.cards = this.shuffleCards(cards))
        .catch(() => this.cards = []);
    });
  }

  showNextCard(): void {
    if (this.currentCardIndex + 1 < this.cards.length) {
      this.currentCardIndex++;
      this.resetCardState();
      return;
    }
    this.router.navigate(['/']);
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

  shuffleCards(cards: Card[]): Card[] {
    const shuffledCards = cards;
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = shuffledCards[newIndex];
      shuffledCards[newIndex] = shuffledCards[i];
      shuffledCards[i] = oldValue;
    }
    return shuffledCards;
  }

  resetCardState(): void {
    this.showAnswer = false;
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }

}
