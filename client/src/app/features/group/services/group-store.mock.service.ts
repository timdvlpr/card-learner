import { BehaviorSubject } from 'rxjs';
import { Group } from '../group.model';

export class GroupStoreMockService {
  groupSource = new BehaviorSubject<Group[]>([]);
  groups$ = this.groupSource.asObservable();

  selectedGroupSource = new BehaviorSubject<number>(-1);
  selectedGroup$ = this.selectedGroupSource.asObservable();

  updateSelectedGroup(id: number): void {
    this.selectedGroupSource.next(id);
  }

  getAll(): Group[] {
    return this.groupSource.getValue();
  }

  add(group: Group): void {
    const groups = [...this.getAll(), group];
    this.groupSource.next(groups);
  }

  update(id: number, group: Group): void {
    const groups = this.getAll().map((g) => {
      if (g.id === group.id) {
        return new Group(group.name, group.id, group.slug);
      }
      return g;
    });
    this.groupSource.next(groups);
  }

  remove(id: number): void {
    const groups = this.getAll().filter((group) => group.id !== id);
    this.groupSource.next(groups);
  }
}
