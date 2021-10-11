import { Component, OnDestroy, OnInit } from '@angular/core';
import { Stack } from '../stack.model';
import { Subject } from 'rxjs';
import { StackStoreService } from '../stack-store.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit, OnDestroy {

  stacks: Stack[] = [];
  filteredStacks: Stack[] = [];
  selectedStack = -1;
  destroy$ = new Subject();

  constructor(
    private stackStore: StackStoreService
  ) { }

  selectStack(stack: Stack): void {
    this.stackStore.updateSelectedStack(stack.id!);
  }

  filterStacks(stacks: Stack[]): void {
    this.filteredStacks = stacks;
  }

  ngOnInit() {
    this.stackStore.stacks$
      .pipe(takeUntil(this.destroy$))
      .subscribe(stacks => {
        this.stacks = stacks;
        this.filteredStacks = this.stacks;
      });
    this.stackStore.selectedStack$
      .pipe(takeUntil(this.destroy$))
      .subscribe(selectedStack => this.selectedStack = selectedStack);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
