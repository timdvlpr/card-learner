import { Component, OnInit, OnDestroy } from '@angular/core';
import { GroupService } from '../group.service';
import { StackService } from '../../stack/stack.service';
import { ModalService } from '../../modal/modal.service';
import { Group } from '../group.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, OnDestroy {

  subGroup: Subscription;
  groups: Group[] = [];
  filteredGroups: Group[] = [];
  loading = true;

  constructor(
    private modalService: ModalService,
    public groupService: GroupService,
    private stackService: StackService
  ) {
    this.subGroup = this.groupService.findAll()
      .subscribe(groups => {
        this.groups = groups;
        this.filteredGroups = this.groups;
      });
  }

  selectGroup(id: number): void {
    this.stackService.getStacksInGroup(id)
      .then(() => this.groupService.selectedGroup = id)
      .catch(() => this.groupService.selectedGroup = id);
  }

  editGroup(group: Group): void {
    this.modalService.showEditModal('group', group);
  }

  deleteGroup(group: Group): void {
    this.modalService.showConfirmationModal('group', group);
  }

  filterGroups(groups: Group[]): void {
    this.filteredGroups = groups;
  }

  async ngOnInit() {
    try {
      await this.groupService.getGroups();
      this.groupService.selectedGroup = this.groupService.groups[0].id
    } catch (e) {
      this.groupService.updateGroups([]);
    }
    try {
      await this.stackService.getStacksInGroup(this.groupService.selectedGroup)
    } catch (e) {
      this.stackService.updateStacks([])
    }
    this.loading = false;
  }

  ngOnDestroy() {
    this.subGroup.unsubscribe();
  }

}

