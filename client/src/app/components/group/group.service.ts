import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  API_URL = 'http://localhost:5000/api/group';

  constructor(private http: HttpClient) { }

  getGroup(slug: string): Promise<Group> {
    return this.http.get(`${this.API_URL}/${slug}`)
      .toPromise()
      .then((data: any) => data.group);
  }

  getGroups(): Promise<Group[]> {
    return this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((data: any) => data.groups);
  }

  createGroup(group: Group): Promise<Group> {
    return this.http.post(this.API_URL, group)
      .toPromise()
      .then((data: any) => data.group);
  }

  updateGroup(id: number, data: any): Promise<Group> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then((data: any) => data.group);
  }

  deleteGroup(id: number): Promise<any> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

}
