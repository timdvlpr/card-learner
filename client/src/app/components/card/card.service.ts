import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly API_URL = 'http://localhost:5000/api/card';

  constructor(private http: HttpClient) { }

  getCardsInStack(slug: string): Observable<any> {
    return this.http.get(`${this.API_URL}/all/${slug}`);
  }

  getCards(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  createCard(card: Card): Observable<any> {
    return this.http.post(this.API_URL, card);
  }

  updateCard(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }

  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
