import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from './stack.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  API_URL = 'http://localhost:5000/api/stack';
  stacks: Stack[] = [];
  stacksSubject = new Subject<Stack[]>();
  stacksObservable = this.stacksSubject.asObservable();

  constructor(private http: HttpClient) { }

  getStack(slug: string): Promise<Stack> {
    return this.http.get(`${this.API_URL}/${slug}`)
      .toPromise()
      .then((data: any) => new Stack(data.stack.id, data.stack.name, data.stack.slug, data.stack.inGroup));
  }

  getStacks(): Promise<void> {
    return this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((data: any) => this.stacks = data.data);
  }

  getStacksInGroup(id: number): Promise<void> {
    return this.http.get(`${this.API_URL}/all/${id}`)
      .toPromise()
      .then((stacks: any) => {
        this.stacks = stacks.data;
        this.updateStacks(stacks.data);
      })
      .catch((e) => {
        this.updateStacks([]);
        throw e;
      });
  }

  createStack(data: any): Promise<void> {
    return this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getStacksInGroup(data.inGroup));
  }

  updateStack(id: number, data: any): Promise<void> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getStacksInGroup(data.inGroup));
  }

  deleteStack(id: number): Promise<Object> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

  updateStacks(stacks: Stack[]): void {
    this.stacksSubject.next(stacks);
  }

  findAll(): Observable<Stack[]> {
    return this.stacksObservable;
  }

}
