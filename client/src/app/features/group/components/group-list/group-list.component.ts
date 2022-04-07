import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { Group } from '../../group.model';
import { Subject } from 'rxjs';
import { GroupStoreService } from '../../services/group-store.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit, OnDestroy {
  groups: Group[] = [];
  filteredGroups: Group[] = [];
  selectedGroup = -1;
  destroy$ = new Subject();

  constructor(
    private modalService: ModalService,
    private groupStore: GroupStoreService
  ) {}

  async selectGroup(group: Group) {
    this.groupStore.updateSelectedGroup(group.id!);
  }

  editGroup(group: Group): void {
    const editGroup = new Group(group.name, group.id, group.slug);
    this.modalService.openModalWithData('edit-data-modal', {
      type: 'group',
      data: editGroup
    });
  }

  deleteGroup(group: Group): void {
    const deleteGroup = new Group(group.name, group.id, group.slug);
    this.modalService.openModalWithData('delete-data-modal', {
      type: 'group',
      data: deleteGroup
    });
  }

  filterGroups(groups: Group[]): void {
    this.filteredGroups = groups;
  }

  ngOnInit() {
    this.groupStore.groups$
      .pipe(takeUntil(this.destroy$))
      .subscribe((groups) => {
        this.groups = groups;
        this.filteredGroups = this.groups;
      });
    this.groupStore.selectedGroup$
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedGroup) => (this.selectedGroup = selectedGroup));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
