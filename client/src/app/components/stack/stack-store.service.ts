import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stack } from './stack.model';
import { StackService } from './stack.service';
import { Store } from '../../shared/store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StackStoreService implements Store<Stack> {

  stackSource = new BehaviorSubject<Stack[]>([]);
  stacks$ = this.stackSource.asObservable();

  selectedStackSource = new BehaviorSubject<number>(-1);
  selectedStack$ = this.selectedStackSource.asObservable();

  constructor(private stackService: StackService) {
    this.loadInitialData();
  }

  private setStacks(stacks: Stack[]): void {
    this.stackSource.next(stacks);
  }

  private loadInitialData() {
    this.stackService.getStacks()
      .pipe(map(data => data.stacks))
      .subscribe((stacks: Stack[]) => {
        this.setStacks(stacks);
        if (stacks.length > 0) {
          this.updateSelectedStack(stacks[0].id);
        }
      }, () => this.setStacks([]));
  }

  getAll(): Stack[] {
    return this.stackSource.getValue();
  }

  async add(stack: Stack): Promise<void> {
    this.stackService.createStack(stack)
      .pipe(map(data => data.stack))
      .subscribe((stack: Stack) => {
        const stacks = [...this.getAll(), stack];
        this.setStacks(stacks);
      });
  }

  async update(id: number, stack: Stack): Promise<void> {
    this.stackService.updateStack(id, stack)
      .pipe(map(data => data.stack))
      .subscribe((stack: Stack) => {
        const stacks = this.getAll().map(s => {
            if (s.id === stack.id) {
              return new Stack(stack.id, stack.name, stack.slug, stack.inGroup)
            }
            return s;
          }
        );
        this.setStacks(stacks);
      });
  }

  async remove(id: number): Promise<void> {
    this.stackService.deleteStack(id)
      .subscribe(() => {
        const stacks = this.getAll().filter(stack => stack.id !== id);
        this.setStacks(stacks);
      });
  }

  updateSelectedStack(id: number) {
    this.selectedStackSource.next(id);
  }

}
