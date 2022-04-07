import { BehaviorSubject } from 'rxjs';
import { Card } from './card.model';

export class CardStoreMockService {
  cardSource = new BehaviorSubject<Card[]>([]);
  cards$ = this.cardSource.asObservable();

  getAll(): Card[] {
    return this.cardSource.getValue();
  }

  add(card: Card): void {
    const stacks = [...this.cardSource.getValue(), card];
    this.cardSource.next(stacks);
  }

  update(id: number, card: Card): void {
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
    this.cardSource.next(cards);
  }

  remove(id: number): void {
    const cards = this.getAll().filter((card) => card.id !== id);
    this.cardSource.next(cards);
  }
}
