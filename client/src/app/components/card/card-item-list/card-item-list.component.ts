import { Component, OnDestroy } from '@angular/core';
import { CardStoreService } from '../card-store.service';
import { Subscription } from 'rxjs';
import { Card } from '../card.model';
import { StackStoreService } from '../../stack/stack-store.service';

@Component({
  selector: 'app-card-item-list',
  templateUrl: './card-item-list.component.html',
  styleUrls: ['./card-item-list.component.scss']
})
export class CardItemListComponent implements OnDestroy {

  cards: Card[] = [];
  subCards: Subscription;
  subSelectedStack: Subscription;
  selectedStack = -1;
  sortedByName = true;
  sortedDescending = false;

  constructor(
    private cardStore: CardStoreService,
    private stackStore: StackStoreService
  ) {
    this.subCards = this.cardStore.cards$
      .subscribe(cards => {
        if (this.selectedStack !== -1) {
          this.cards = cards.filter(c => c.inStack == this.selectedStack)
        } else {
          this.cards = cards;
        }
        this.checkCardSortOptions();
      });
    this.subSelectedStack = this.stackStore.selectedStack$
      .subscribe(stackId => {
        this.selectedStack = stackId;
        this.cards = this.cardStore.getAll().filter(card => card.inStack == this.selectedStack);
        this.checkCardSortOptions();
      });
  }

  sortByQuestionName(cards: Card[]): Card[] {
    return cards.sort((a, b) => a.question.localeCompare(b.question));
  }

  sortByQuestionNameDesc(cards: Card[]): Card[] {
    return cards
      .sort((a, b) => a.question.localeCompare(b.question))
      .reverse();
  }

  changeSortOrder(): void {
    this.sortedDescending = !this.sortedDescending;
    if (this.sortedDescending) {
      this.sortByQuestionNameDesc(this.cards);
      return;
    }
    this.sortByQuestionName(this.cards);
  }

  checkCardSortOptions(): void {
    if (this.sortedByName && !this.sortedDescending) {
      this.sortByQuestionName(this.cards);
    } else {
      this.sortByQuestionNameDesc(this.cards);
    }
  }

  ngOnDestroy() {
    this.subCards.unsubscribe();
    this.subSelectedStack.unsubscribe();
  }

}
