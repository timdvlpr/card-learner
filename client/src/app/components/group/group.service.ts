import { Injectable } from '@angular/core';
import { Group } from './group.model';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  API_URL = 'http://localhost:5000/api/group';
  groups: Group[] = [];
  selectedGroup = -1;
  groupsSubject = new Subject<Group[]>();
  groupsObservable = this.groupsSubject.asObservable();

  constructor(private http: HttpClient) { }

  getGroup(slug: string): Promise<Group> {
    return this.http.get(`${this.API_URL}/${slug}`)
      .toPromise()
      .then((data: any) => new Group(data.group.id, data.group.name, data.group.slug))
  }

  getGroups(): Promise<void> {
    return this.http.get(`${this.API_URL}/all`)
      .toPromise()
      .then((groups: any) => {
        this.groups = groups.data;
        this.updateGroups(groups.data);
      })
      .catch((e) => {
        this.updateGroups([]);
        throw e;
      });
  }

  createGroup(data: any): Promise<void> {
    return this.http.post(this.API_URL, data)
      .toPromise()
      .then(() => this.getGroups());
  }

  updateGroup(id: number, data: any): Promise<void> {
    return this.http.put(`${this.API_URL}/${id}`, data)
      .toPromise()
      .then(() => this.getGroups());
  }

  deleteGroup(id: number): Promise<Object> {
    return this.http.delete(`${this.API_URL}/${id}`)
      .toPromise();
  }

  updateGroups(groups: Group[]): void {
    this.groupsSubject.next(groups);
  }

  findAll(): Observable<Group[]> {
    return this.groupsObservable;
  }

}
