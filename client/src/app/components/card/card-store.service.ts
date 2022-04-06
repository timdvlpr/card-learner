import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from './card.model';
import { CardService } from './card.service';
import { Store } from '../../core/interfaces/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService implements Store<Card> {
  cardSource = new BehaviorSubject<Card[]>([]);
  cards$ = this.cardSource.asObservable();

  constructor(private cardService: CardService) {
    this.loadInitialData();
  }

  private setCards(cards: Card[]): void {
    this.cardSource.next(cards);
  }

  private loadInitialData(): void {
    this.cardService
      .getCards()
      .pipe(map((data) => data.cards))
      .subscribe(
        (cards: Card[]) => this.setCards(cards),
        () => this.setCards([])
      );
  }

  getAll(): Card[] {
    return this.cardSource.getValue();
  }

  add(card: Card): void {
    this.cardService
      .createCard(card)
      .pipe(map((data) => data.card))
      .subscribe((card: Card) => {
        const cards = [...this.getAll(), card];
        this.setCards(cards);
      });
  }

  update(id: number, card: Card): void {
    this.cardService
      .updateCard(id, card)
      .pipe(map((data) => data.card))
      .subscribe((card: Card) => {
        const cards = this.getAll().map((c) => {
          if (c.id === card.id) {
            return new Card(
              card.id,
              card.question,
              card.answer,
              card.inStack,
              card.slug
            );
          }
          return c;
        });
        this.setCards(cards);
      });
  }

  remove(id: number): void {
    this.cardService.deleteCard(id).subscribe(() => {
      const cards = this.getAll().filter((card) => card.id !== id);
      this.setCards(cards);
    });
  }
}
