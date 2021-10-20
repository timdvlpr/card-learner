import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from './stack.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  readonly API_URL = 'http://localhost:5000/api/stack';

  constructor(private http: HttpClient) { }

  getStacks(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  createStack(stack: Stack): Observable<any> {
    return this.http.post(this.API_URL, stack);
  }

  updateStack(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }

  deleteStack(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
