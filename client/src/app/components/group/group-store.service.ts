import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from './group.model';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class GroupStoreService {

  private readonly _groupSource = new BehaviorSubject<Group[]>([]);
  readonly groups$ = this._groupSource.asObservable();

  private readonly _selectedGroupSource = new BehaviorSubject<number>(-1);
  readonly selectedGroup$ = this._selectedGroupSource.asObservable();

  constructor(private groupService: GroupService) {
    this._loadInitialData();
  }

  private _setGroups(groups: Group[]): void {
    this._groupSource.next(groups);
  }

  private _loadInitialData() {
    this.groupService.getGroups()
      .then((groups: Group[]) => {
        this._setGroups(groups);
        if (groups.length > 0) {
          this.updateSelectedGroup(groups[0].id!);
        }
      });
  }

  getGroups(): Group[] {
    return this._groupSource.getValue()
  }

  async addGroup(group: Group): Promise<void> {
    const data = await this.groupService.createGroup(group);

    const groups = [...this.getGroups(), data];
    this._setGroups(groups);
  }

  async updateGroup(id: number, group: Group): Promise<void> {
    const data = await this.groupService.updateGroup(id, group);

    const groups = this.getGroups().map(g =>
      g.id === group.id ? new Group(data.name, data.id, data.slug) : g
    );
    this._setGroups(groups);
  }

  async removeGroup(id: number): Promise<void> {
    await this.groupService.deleteGroup(id);

    const groups = this.getGroups().filter(g => g.id !== id);
    this._setGroups(groups);
  }

  updateSelectedGroup(id: number) {
    this._selectedGroupSource.next(id);
  }

}
