import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiPaths } from '../../core/enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCardsInStack(slug: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}${ApiPaths.Card}/all/${slug}`);
  }

  getCards(): Observable<any> {
    return this.http.get(`${this.BASE_URL}${ApiPaths.Card}/all`);
  }

  createCard(card: Card): Observable<any> {
    return this.http.post(`${this.BASE_URL}${ApiPaths.Card}`, card);
  }

  updateCard(id: number, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}${ApiPaths.Card}/${id}`, data);
  }

  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}${ApiPaths.Card}/${id}`);
  }

}
