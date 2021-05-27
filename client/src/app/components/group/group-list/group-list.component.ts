import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { StackService } from '../../stack/stack.service';
import { ModalService } from '../../modal/modal.service';
import { Group } from '../group.model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  constructor(
    private modalService: ModalService,
    public groupService: GroupService,
    private stackService: StackService
  ) { }

  selectGroup(id: number): void {
    this.stackService.getStacksInGroup(id)
      .then(() => this.groupService.selectedGroup = id)
      .catch(() => this.groupService.selectedGroup = id);
  }

  editGroup(group: Group): void {
    this.modalService.showEditModal('group', group);
  }

  deleteGroup(group: Group) {
    this.modalService.showConfirmationModal('group', group);
  }

  async ngOnInit(): Promise<void> {
    await this.groupService.getGroups();
    this.groupService.selectedGroup = this.groupService.groups[0].id;
    this.stackService.getStacksInGroup(this.groupService.selectedGroup)
      .catch(() => this.stackService.stacksInGroup = []);
  }

}
