import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  API_URL = 'http://localhost:5000/api/group'
  groups: Group[] = [];
  selectedGroup = -1;

  constructor(private http: HttpClient) { }

  async getGroups(): Promise<void> {
    await this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((groups: any) => this.groups = groups.data)
      .catch(e => {
        throw e;
      });
  }

  async createGroup(data: any): Promise<void> {
    await this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getGroups())
      .catch(e => {
        throw e;
      });
  }

  async updateGroup(id: number, data: any): Promise<void> {
    await this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getGroups())
      .catch(e => {
        throw e;
      });
  }

  async deleteGroup(id: number): Promise<void> {
    await this.http.delete(`${this.API_URL}/${id}`)
      .toPromise()
      .then(() => this.getGroups())
      .catch(e => {
        throw e;
      });
  }

}
