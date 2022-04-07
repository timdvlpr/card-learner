import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Stack } from '../../stack.model';
import { StackStoreService } from '../../services/stack-store.service';
import { GroupStoreService } from '../../../group/services/group-store.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stack-item-list',
  templateUrl: './stack-item-list.component.html',
  styleUrls: ['./stack-item-list.component.scss']
})
export class StackItemListComponent implements OnInit, OnDestroy {
  stacks: Stack[] = [];
  selectedGroup = -1;
  sortedByName = true;
  sortedDescending = false;
  destroy$ = new Subject();

  constructor(
    private stackStore: StackStoreService,
    private groupStore: GroupStoreService
  ) {}

  sortByName(stacks: Stack[]): Stack[] {
    return stacks.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(stacks: Stack[]): Stack[] {
    return stacks.sort((a, b) => a.name.localeCompare(b.name)).reverse();
  }

  changeSortOrder(): void {
    this.sortedDescending = !this.sortedDescending;
    if (this.sortedDescending) {
      this.sortByNameDesc(this.stacks);
      return;
    }
    this.sortByName(this.stacks);
  }

  checkStackSortOptions(): void {
    const toSortStacks = [...this.stacks];
    if (this.sortedByName && !this.sortedDescending) {
      this.stacks = this.sortByName(toSortStacks);
    } else {
      this.stacks = this.sortByNameDesc(toSortStacks);
    }
  }

  ngOnInit() {
    this.stackStore.stacks$
      .pipe(takeUntil(this.destroy$))
      .subscribe((stacks) => {
        if (this.selectedGroup !== -1) {
          this.stacks = stacks.filter((s) => s.inGroup == this.selectedGroup);
        } else {
          this.stacks = stacks;
        }
        this.checkStackSortOptions();
      });
    this.groupStore.selectedGroup$
      .pipe(takeUntil(this.destroy$))
      .subscribe((groupId) => {
        this.selectedGroup = groupId;
        this.stacks = this.stackStore
          .getAll()
          .filter((stack) => stack.inGroup == this.selectedGroup);
        this.checkStackSortOptions();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
