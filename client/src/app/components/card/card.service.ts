import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL = 'http://localhost:5000/api/card';
  cards: Card[] = [];
  cardsSubject = new Subject<Card[]>();
  cardsObservable = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCardsInStack(id: number): Promise<void> {
    return this.http.get(`${this.API_URL}/all/${id}`)
      .toPromise()
      .then((cards: any) => {
        this.cards = cards.data;
        this.updateCards(cards.data);
      })
      .catch((e) => {
        this.updateCards([]);
        throw e;
      });
  }

 createCard(data: any): Promise<void> {
    return this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getCardsInStack(data.inStack));
  }

  updateCard(id: number, data: any): Promise<void> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getCardsInStack(data.inStack));
  }

  deleteCard(id: number): Promise<Object> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

  updateCards(cards: Card[]): void {
    this.cardsSubject.next(cards);
  }

  findAll(): Observable<Card[]> {
    return this.cardsObservable;
  }

}
