import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from './card.model';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {

  private readonly _cardSource = new BehaviorSubject<Card[]>([]);
  readonly cards$ = this._cardSource.asObservable();

  constructor(private cardService: CardService) {
    this._loadInitialData();
  }

  private _setCards(cards: Card[]): void {
    this._cardSource.next(cards);
  }

  private _loadInitialData(): void {
    this.cardService.getCards()
      .then((cards: Card[]) => this._setCards(cards))
      .catch(() => this._setCards([]));
  }

  getCards(): Card[] {
    return this._cardSource.getValue();
  }

  async addCard(card: Card): Promise<void> {
    const data = await this.cardService.createCard(card);

    const cards = [...this.getCards(), data];
    this._setCards(cards);
  }

  async updateCard(id: number, card: Card): Promise<void> {
    const data = await this.cardService.updateCard(id, card);

    const cards = this.getCards().map(c =>
      c.id === card.id ? new Card(data.id, data.question, data.answer, data.inStack, data.slug) : c
    );
    this._setCards(cards);
  }

  async removeCard(id: number): Promise<void> {
    await this.cardService.deleteCard(id);

    const cards = this.getCards().filter(c => c.id !== id);
    this._setCards(cards);
  }

}
