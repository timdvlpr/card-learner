import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardStoreService } from '../../services/card-store.service';
import { Subject } from 'rxjs';
import { Card } from '../../card.model';
import { StackStoreService } from '../../../stack/services/stack-store.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-card-item-list',
  templateUrl: './card-item-list.component.html',
  styleUrls: ['./card-item-list.component.scss']
})
export class CardItemListComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  selectedStack = -1;
  sortedByName = true;
  sortedDescending = false;
  destroy$ = new Subject();

  constructor(
    private cardStore: CardStoreService,
    private stackStore: StackStoreService
  ) {}

  sortByQuestionName(cards: Card[]): Card[] {
    return cards.sort((a, b) => a.question.localeCompare(b.question));
  }

  sortByQuestionNameDesc(cards: Card[]): Card[] {
    return cards.sort((a, b) => a.question.localeCompare(b.question)).reverse();
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

  ngOnInit() {
    this.cardStore.cards$.pipe(takeUntil(this.destroy$)).subscribe((cards) => {
      if (this.selectedStack !== -1) {
        this.cards = cards.filter((c) => c.inStack == this.selectedStack);
      } else {
        this.cards = cards;
      }
      this.checkCardSortOptions();
    });
    this.stackStore.selectedStack$
      .pipe(takeUntil(this.destroy$))
      .subscribe((stackId) => {
        this.selectedStack = stackId;
        this.cards = this.cardStore
          .getAll()
          .filter((card) => card.inStack == this.selectedStack);
        this.checkCardSortOptions();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
