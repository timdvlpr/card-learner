import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Group } from '../group.model';
import { GroupService } from '../group.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent {

  groupForm: FormGroup;
  group: Group;

  constructor(
    private fb: FormBuilder,
    public modalService: ModalService,
    private groupService: GroupService,
    private alertService: AlertService
  ) {
    this.group = this.modalService.editObject as Group;
    if (this.modalService.editMode) {
      this.groupForm = this.fb.group({
        name: new FormControl(this.group.name, [Validators.required])
      });
    } else {
      this.groupForm = this.fb.group({
        name: new FormControl('', [Validators.required])
      });
    }
  }

  get name() { return this.groupForm.controls.name }

  async submitForm(): Promise<void> {
    const data = {
      name: this.groupForm.value.name,
    }
    if (!this.modalService.editMode) {
      try {
        await this.groupService.createGroup(data);
        this.alertService.activateAlert('success', 'Gruppe erfolgreich angelegt');
        this.groupForm.reset();
      } catch (e) {
        this.alertService.activateAlert('error', e);
      }
    } else {
      try {
        await this.groupService.updateGroup(this.group.id, data);
        this.alertService.activateAlert('success', 'Gruppe erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e);
      }
    }
  }

}
