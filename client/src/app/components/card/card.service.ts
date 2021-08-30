import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL = 'http://localhost:5000/api/card';

  constructor(private http: HttpClient) { }

  getCards(): Promise<Card[]> {
    return this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((data: any) => data.cards);
  }

  getCardsInStack(slug: string): Promise<Card[]> {
    return this.http.get(`${this.API_URL}/all/${slug}`)
      .toPromise()
      .then((data: any) => data.cards);
  }

  createCard(card: Card): Promise<Card> {
    return this.http.post(this.API_URL, card)
      .toPromise()
      .then((data: any) => data.card);
  }

  updateCard(id: number, data: any): Promise<Card> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then((data: any) => data.card);
  }

  deleteCard(id: number): Promise<any> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

}
