import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../components/card/card.service';
import { Card } from '../../components/card/card.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit, OnDestroy {

  slug = '';
  cards: Card[] = [];
  currentCardIndex = 0;
  showAnswer = false;
  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) { }

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

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.slug = params['slug'];
        this.cardService.getCardsInStack(this.slug)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (data) => this.cards = this.shuffleCards(data.cards),
            () => this.cards = []
          );
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
