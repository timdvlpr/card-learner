import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from '../stack.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiPaths } from '../../../core/enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getStacks(): Observable<any> {
    return this.http.get(`${this.BASE_URL}${ApiPaths.Stack}/all`);
  }

  createStack(stack: Stack): Observable<any> {
    return this.http.post(`${this.BASE_URL}${ApiPaths.Stack}`, stack);
  }

  updateStack(id: number, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}${ApiPaths.Stack}/${id}`, data);
  }

  deleteStack(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}${ApiPaths.Stack}/${id}`);
  }
}
