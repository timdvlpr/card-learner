import { Component, OnDestroy } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { Group } from '../group.model';
import { Subscription } from 'rxjs';
import { GroupStoreService } from '../group-store.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnDestroy {

  subGroup: Subscription;
  subSelectedGroup: Subscription;
  groups: Group[] = [];
  filteredGroups: Group[] = [];
  selectedGroup = -1;

  constructor(
    private modalService: ModalService,
    private groupStore: GroupStoreService
  ) {
    this.subGroup = this.groupStore.groups$
      .subscribe(groups => {
        this.groups = groups;
        this.filteredGroups = this.groups;
      });
    this.subSelectedGroup = this.groupStore.selectedGroup$
      .subscribe(selectedGroup => this.selectedGroup = selectedGroup);
  }

  async selectGroup(group: Group) {
    this.groupStore.updateSelectedGroup(group.id!);
  }

  editGroup(group: Group): void {
    const editGroup = new Group(group.name, group.id, group.slug)
    this.modalService.openModalWithData('edit-data-modal', {type: 'group', data: editGroup})
  }

  deleteGroup(group: Group): void {
    const deleteGroup = new Group(group.name, group.id, group.slug);
    this.modalService.openModalWithData('delete-data-modal', {type: 'group', data: deleteGroup});
  }

  filterGroups(groups: Group[]): void {
    this.filteredGroups = groups;
  }

  ngOnDestroy() {
    this.subGroup.unsubscribe();
    this.subSelectedGroup.unsubscribe();
  }

}

