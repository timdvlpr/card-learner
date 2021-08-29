import { Component, Input, ViewChild } from '@angular/core';
import { Group } from '../group.model';
import { GroupService } from '../group.service';
import { AlertService } from '../../alert/alert.service';
import { GroupStoreService } from '../group-store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent {

  @ViewChild('groupForm') groupForm: NgForm | undefined;
  @Input() group: Group = new Group('');
  @Input() type: 'add' | 'edit' = 'add';

  constructor(
    private groupService: GroupService,
    private groupStore: GroupStoreService,
    private alertService: AlertService
  ) { }

  async submitForm(): Promise<void> {
    if (this.type === 'add') {
      try {
        await this.groupStore.addGroup(this.group);
        this.alertService.activateAlert('success', 'Gruppe erfolgreich angelegt');
        this.groupForm!.resetForm();
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    } else {
        try {
          await this.groupStore.updateGroup(this.group.id!, this.group)
          this.alertService.activateAlert('success', 'Gruppe erfolgreich bearbeitet');
        } catch (e) {
          this.alertService.activateAlert('error', e.error.message);
        }
    }
  }

}
