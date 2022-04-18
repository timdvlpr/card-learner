import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stack } from '../stack.model';
import { StackService } from './stack.service';
import { Store } from '../../../core/interfaces/store';
import { map } from 'rxjs/operators';
import { AlertService } from '../../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class StackStoreService implements Store<Stack> {
  stackSource = new BehaviorSubject<Stack[]>([]);
  stacks$ = this.stackSource.asObservable();

  selectedStackSource = new BehaviorSubject<number>(-1);
  selectedStack$ = this.selectedStackSource.asObservable();

  constructor(
    private stackService: StackService,
    private alertService: AlertService
  ) {
    this.loadInitialData();
  }

  private handleSuccess(message: string): void {
    this.alertService.activateAlert({ type: 'success', message: message });
  }

  private setStacks(stacks: Stack[]): void {
    this.stackSource.next(stacks);
  }

  private loadInitialData(): void {
    this.stackService
      .getStacks()
      .pipe(map((data) => data.stacks))
      .subscribe(
        (stacks: Stack[]) => {
          this.setStacks(stacks);
          if (stacks.length > 0) {
            this.updateSelectedStack(stacks[0].id);
          }
        },
        () => this.setStacks([])
      );
  }

  getAll(): Stack[] {
    return this.stackSource.getValue();
  }

  add(stack: Stack): void {
    this.stackService
      .createStack(stack)
      .pipe(map((data) => data.stack))
      .subscribe((stack: Stack) => {
        const stacks = [...this.getAll(), stack];
        this.setStacks(stacks);
        this.handleSuccess('Stapel erfolgreich hinzugefügt');
      });
  }

  update(id: number, stack: Stack): void {
    this.stackService
      .updateStack(id, stack)
      .pipe(map((data) => data.stack))
      .subscribe((stack: Stack) => {
        const stacks = this.getAll().map((s) => {
          if (s.id === stack.id) {
            return new Stack(stack.id, stack.name, stack.slug, stack.inGroup);
          }
          return s;
        });
        this.setStacks(stacks);
        this.handleSuccess('Stapel erfolgreich bearbeitet');
      });
  }

  remove(id: number): void {
    this.stackService.deleteStack(id).subscribe(() => {
      const stacks = this.getAll().filter((stack) => stack.id !== id);
      this.setStacks(stacks);
      this.handleSuccess('Stapel erfolgreich gelöscht');
    });
  }

  updateSelectedStack(id: number): void {
    this.selectedStackSource.next(id);
  }
}
