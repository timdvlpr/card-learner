import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stack } from '../stack.model';
import { StackStoreService } from '../stack-store.service';
import { GroupStoreService } from '../../group/group-store.service';

@Component({
  selector: 'app-stack-item-list',
  templateUrl: './stack-item-list.component.html',
  styleUrls: ['./stack-item-list.component.scss']
})
export class StackItemListComponent implements OnDestroy {

  stacks: Stack[] = [];
  subStacks: Subscription;
  subSelectedGroup: Subscription;
  selectedGroup = -1;
  sortedByName = true;
  sortedDescending = false;

  constructor(
    private stackStore: StackStoreService,
    private groupStore: GroupStoreService
  ) {
    this.subStacks = this.stackStore.stacks$
      .subscribe(stacks => {
        if (this.selectedGroup !== -1) {
          this.stacks = stacks.filter(s => s.inGroup == this.selectedGroup);
        } else {
          this.stacks = stacks;
        }
        this.checkStackSortOptions();
      });
    this.subSelectedGroup = this.groupStore.selectedGroup$
      .subscribe(groupId => {
        this.selectedGroup = groupId;
        this.stacks = this.stackStore.getStacks().filter(stack => stack.inGroup == this.selectedGroup);
        this.checkStackSortOptions();
      });
  }

  sortByName(stacks: Stack[]): Stack[] {
    return stacks.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(stacks: Stack[]): Stack[] {
    return stacks
      .sort((a, b) => a.name.localeCompare(b.name))
      .reverse();
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

  ngOnDestroy() {
    this.subStacks.unsubscribe();
    this.subSelectedGroup.unsubscribe();
  }

}
