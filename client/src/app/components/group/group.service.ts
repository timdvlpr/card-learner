import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  readonly API_URL = 'http://localhost:5000/api/group';

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  createGroup(group: Group): Observable<any> {
    return this.http.post(this.API_URL, group);
  }

  updateGroup(id: number, data: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
