import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from './card.model';
import { CardService } from './card.service';
import { Store } from '../../shared/store';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService implements Store<Card>{

  cardSource = new BehaviorSubject<Card[]>([]);
  cards$ = this.cardSource.asObservable();

  constructor(private cardService: CardService) {
    this.loadInitialData();
  }

  private setCards(cards: Card[]): void {
    this.cardSource.next(cards);
  }

  private loadInitialData(): void {
    this.cardService.getCards()
      .then((cards: Card[]) => this.setCards(cards))
      .catch(() => this.setCards([]));
  }

  getAll(): Card[] {
    return this.cardSource.getValue();
  }

  async add(card: Card): Promise<void> {
    const data = await this.cardService.createCard(card);

    const cards = [...this.getAll(), data];
    this.setCards(cards);
  }

  async update(id: number, card: Card): Promise<void> {
    const data = await this.cardService.updateCard(id, card);

    const cards = this.getAll().map(c => {
        if (c.id === card.id) {
          return new Card(data.id, data.question, data.answer, data.inStack, data.slug)
        }
        return c;
      }
    );
    this.setCards(cards);
  }

  async remove(id: number): Promise<void> {
    await this.cardService.deleteCard(id);

    const cards = this.getAll().filter(card => card.id !== id);
    this.setCards(cards);
  }

}
