import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../group.model';
import { GroupService } from './group.service';
import { Store } from '../../../core/interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class GroupStoreService implements Store<Group> {
  groupSource = new BehaviorSubject<Group[]>([]);
  groups$ = this.groupSource.asObservable();

  selectedGroupSource = new BehaviorSubject<number>(-1);
  selectedGroup$ = this.selectedGroupSource.asObservable();

  constructor(private groupService: GroupService) {
    this.loadInitialData();
  }

  private setGroups(groups: Group[]): void {
    this.groupSource.next(groups);
  }

  private loadInitialData(): void {
    this.groupService
      .getGroups()
      .pipe(map((data) => data.groups))
      .subscribe(
        (groups: Group[]) => {
          this.setGroups(groups);
          if (groups.length > 0) {
            this.updateSelectedGroup(groups[0].id!);
          }
        },
        () => this.setGroups([])
      );
  }

  updateSelectedGroup(id: number): void {
    this.selectedGroupSource.next(id);
  }

  getAll(): Group[] {
    return this.groupSource.getValue();
  }

  add(group: Group): void {
    this.groupService
      .createGroup(group)
      .pipe(map((data) => data.group))
      .subscribe((group: Group) => {
        const groups = [...this.getAll(), group];
        this.setGroups(groups);
      });
  }

  update(id: number, group: Group): void {
    this.groupService
      .updateGroup(id, group)
      .pipe(map((data) => data.group))
      .subscribe((group: Group) => {
        const groups = this.getAll().map((g) => {
          if (g.id === group.id) {
            return new Group(group.name, group.id, group.slug);
          }
          return g;
        });
        this.setGroups(groups);
      });
  }

  remove(id: number): void {
    this.groupService.deleteGroup(id).subscribe(() => {
      const groups = this.getAll().filter((group) => group.id !== id);
      this.setGroups(groups);
    });
  }
}
