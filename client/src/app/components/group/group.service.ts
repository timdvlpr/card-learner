import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiPaths } from '../../core/enums/api-paths';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(`${this.BASE_URL}${ApiPaths.Group}/all`);
  }

  createGroup(group: Group): Observable<any> {
    return this.http.post(`${this.BASE_URL}${ApiPaths.Group}`, group);
  }

  updateGroup(id: number, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}${ApiPaths.Group}/${id}`, data);
  }

  deleteGroup(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}${ApiPaths.Group}/${id}`);
  }

}
