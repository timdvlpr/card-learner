import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from './stack.model';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  API_URL = 'http://localhost:5000/api/stack';
  stack: Stack = {} as Stack;
  stacks: Stack[] = [];
  stacksInGroup: Stack[] = [];
  selectedStack = -1;

  constructor(private http: HttpClient) { }

  async getStack(slug: string): Promise<void> {
    await this.http.get(`${this.API_URL}/${slug}`)
      .toPromise()
      .then((data: any) => this.stack = data.stack)
      .catch((e) => {
        this.stack = {} as Stack;
        throw e;
      })
  }

  async getStacks(): Promise<void> {
    await this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((data: any) => this.stacks = data.data)
      .catch((e) => {
        this.stacks = [];
        throw e;
      })
  }

  async getStacksInGroup(id: number): Promise<void> {
    await this.http.get(`${this.API_URL}/all/${id}`)
      .toPromise()
      .then((stacks: any) => this.stacksInGroup = stacks.data)
      .catch((e) => {
        this.stacksInGroup = [];
        throw e;
      });
  }

  async createStack(data: any): Promise<void> {
    await this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getStacksInGroup(data.inGroup))
      .catch(e => {
        throw e;
      });
  }

  async updateStack(id: number, data: any): Promise<void> {
    await this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getStacksInGroup(data.inGroup))
      .catch(e => {
        throw e;
      });
  }

  async deleteStack(id: number, groupId: number): Promise<void> {
    await this.http.delete(`${this.API_URL}/${id}`)
      .toPromise()
      .then(() => this.getStacksInGroup(groupId))
      .catch(e => {
        throw e;
      });
  }

}
