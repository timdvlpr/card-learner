import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from './stack.model';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  API_URL = 'http://localhost:5000/api/stack';

  constructor(private http: HttpClient) { }

  getStack(slug: string): Promise<Stack> {
    return this.http.get(`${this.API_URL}/${slug}`)
      .toPromise()
      .then((data: any) => data.stack);
  }

  getStacks(): Promise<Stack[]> {
    return this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((data: any) => data.stacks);
  }

  createStack(stack: Stack): Promise<Stack> {
    return this.http.post(this.API_URL, stack)
      .toPromise()
      .then((data: any) => data.stack);
  }

  updateStack(id: number, data: any): Promise<Stack> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then((data: any) => data.stack);
  }

  deleteStack(id: number): Promise<any> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

}
