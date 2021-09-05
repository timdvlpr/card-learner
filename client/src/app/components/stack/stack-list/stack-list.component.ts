import { Component, OnDestroy } from '@angular/core';
import { Stack } from '../stack.model';
import { Subscription } from 'rxjs';
import { StackStoreService } from '../stack-store.service';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnDestroy {

  subStack: Subscription;
  subSelectedStack: Subscription;
  stacks: Stack[] = [];
  filteredStacks: Stack[] = [];
  selectedStack = -1;

  constructor(
    private stackStore: StackStoreService
  ) {
    this.subStack = this.stackStore.stacks$
      .subscribe(stacks => {
        this.stacks = stacks;
        this.filteredStacks = this.stacks;
      });
    this.subSelectedStack = this.stackStore.selectedStack$
      .subscribe(selectedStack => this.selectedStack = selectedStack);
  }

  selectStack(stack: Stack): void {
    this.stackStore.updateSelectedStack(stack.id!);
  }

  filterStacks(stacks: Stack[]): void {
    this.filteredStacks = stacks;
  }

  ngOnDestroy() {
    this.subStack.unsubscribe();
    this.subSelectedStack.unsubscribe();
  }

}
