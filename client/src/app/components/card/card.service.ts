import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL = 'http://localhost:5000/api/card';
  cards: Card[] = [];

  constructor(private http: HttpClient) { }

  async getCardsInStack(id: number): Promise<void> {
    await this.http.get(`${this.API_URL}/all/${id}`)
      .toPromise()
      .then((cards: any) => this.cards = cards.data)
      .catch((e) => {
        this.cards = [];
        throw e;
      });
  }

  async createCard(data: any): Promise<void> {
    await this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getCardsInStack(data.inStack))
      .catch(e => {
        throw e;
      });
  }

  async updateCard(id: number, data: any): Promise<void> {
    await this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getCardsInStack(data.inStack))
      .catch(e => {
        throw e;
      });
  }

  async deleteCard(id: number, stackId: number): Promise<void> {
    await this.http.delete(`${this.API_URL}/${id}`)
      .toPromise()
      .then(() => this.getCardsInStack(stackId))
      .catch(e => {
        throw e;
      });
  }

}
