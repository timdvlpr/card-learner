import { BehaviorSubject, of } from 'rxjs';
import { Stack } from '../stack.model';

export class StackStoreMockService {
  stackSource = new BehaviorSubject<Stack[]>([]);
  stacks$ = of([]);

  selectedStackSource = new BehaviorSubject<number>(-1);
  selectedStack$ = of(1);

  getAll(): Stack[] {
    return this.stackSource.getValue();
  }

  updateSelectedStack(id: number): void {
    this.selectedStackSource.next(id);
  }

  add(stack: Stack): void {
    const stacks = [...this.stackSource.getValue(), stack];
    this.stackSource.next(stacks);
  }

  update(id: number, stack: Stack): void {
    const stacks = this.getAll().map((s) => {
      if (s.id === stack.id) {
        return new Stack(stack.id, stack.name, stack.slug, stack.inGroup);
      }
      return s;
    });
    this.stackSource.next(stacks);
  }

  remove(id: number): void {
    const stacks = this.getAll().filter((stack) => stack.id !== id);
    this.stackSource.next(stacks);
  }
}
