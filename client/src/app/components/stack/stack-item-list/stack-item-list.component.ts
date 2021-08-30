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
      });
    this.subSelectedGroup = this.groupStore.selectedGroup$
      .subscribe(groupId => {
        this.selectedGroup = groupId;
        this.stacks = this.stackStore.getStacks().filter(stack => stack.inGroup == this.selectedGroup);
      });
  }

  ngOnDestroy() {
    this.subStacks.unsubscribe();
    this.subSelectedGroup.unsubscribe();
  }

}
