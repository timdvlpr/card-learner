import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from './group.model';
import { GroupService } from './group.service';
import { Store } from '../../shared/store';

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
    this.groupService.getGroups()
      .then((groups: Group[]) => {
        this.setGroups(groups);
        if (groups.length > 0) {
          this.updateSelectedGroup(groups[0].id!);
        }
      })
      .catch(() => this.setGroups([]));
  }

  getAll(): Group[] {
    return this.groupSource.getValue()
  }

  async add(group: Group): Promise<void> {
    const data = await this.groupService.createGroup(group);

    const groups = [...this.getAll(), data];
    this.setGroups(groups);
  }

  async update(id: number, group: Group): Promise<void> {
    const data = await this.groupService.updateGroup(id, group);

    const groups = this.getAll().map(g => {
        if (g.id === group.id) {
          return new Group(data.name, data.id, data.slug)
        }
        return g;
      }
    );
    this.setGroups(groups);
  }

  async remove(id: number): Promise<void> {
    await this.groupService.deleteGroup(id);

    const groups = this.getAll().filter(group => group.id !== id);
    this.setGroups(groups);
  }

  updateSelectedGroup(id: number) {
    this.selectedGroupSource.next(id);
  }

}
