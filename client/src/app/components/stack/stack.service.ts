import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stack } from './stack.model';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  API_URL = 'http://localhost:5000/api/stack';
  stacks: Stack[] = [];

  constructor(private http: HttpClient) { }

  async getAllStacks(): Promise<void> {
    await this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((stacks: any) => this.stacks = stacks.data)
      .catch(e => {
        throw e.error.message;
      });
  }

  async getStacksInGroup(id: number): Promise<void> {
    await this.http.get(`${this.API_URL}/all/${id}`)
      .toPromise()
      .then((stacks: any) => this.stacks = stacks.data)
      .catch((e) => {
        this.stacks = [];
        throw e.error.message;
      });
  }

  async createStack(data: any): Promise<void> {
    await this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getAllStacks())
      .catch(e => {
        throw e.error.message
      });
  }

  async updateStack(id: number, data: any): Promise<void> {
    await this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getAllStacks())
      .catch(e => {
        throw e.error.message;
      });
  }

  async deleteStack(id: number): Promise<void> {
    await this.http.delete(`${this.API_URL}/${id}`)
      .toPromise()
      .then(() => this.getAllStacks())
      .catch(e => {
        throw e.error.message;
      });
  }

}
