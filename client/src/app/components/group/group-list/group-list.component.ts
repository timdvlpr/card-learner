import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() errorEvent = new EventEmitter<string>();
  allStacksSelected = true;
  selectedGroupId = -1;

  constructor(
    private modalService: ModalService,
    public groupService: GroupService,
    private stackService: StackService
  ) { }

  selectGroup(id: number): void {
    this.stackService.getStacksInGroup(id)
      .then(() => this.errorEvent.emit(''))
      .catch(e => this.errorEvent.emit(e));
    this.selectedGroupId = id;
    this.allStacksSelected = false;
  }

  selectAllStacks(): void {
    this.stackService.getAllStacks()
      .then(() => this.errorEvent.emit(''))
      .catch(e => this.errorEvent.emit(e));
    this.allStacksSelected = true;
    this.selectedGroupId = -1;
  }

  editGroup(type: 'group', group: Group): void {
    this.modalService.showEditModal(type, group);
  }

  deleteGroup(id: number) {
    this.groupService.deleteGroup(id);
  }

  ngOnInit(): void {
    this.groupService.getGroups();
  }

}
