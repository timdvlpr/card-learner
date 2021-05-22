import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalService } from '../../modal/modal.service';
import { Stack } from '../stack.model';
import { GroupService } from '../../group/group.service';
import { StackService } from '../stack.service';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent {

  stackForm: FormGroup;
  stack: Stack;

  constructor(
    private fb: FormBuilder,
    private stackService: StackService,
    public modalService: ModalService,
    public groupService: GroupService,
    private alertService: AlertService
  ) {
    this.stack = this.modalService.editObject as Stack;
    if (this.modalService.editMode) {
      this.stackForm = this.fb.group({
        name: new FormControl(this.stack.name, [
          Validators.required
        ]),
        inGroup: new FormControl(this.stack.inGroup, [
          Validators.required]
        )
      });
    } else {
      this.stackForm = this.fb.group({
        name: new FormControl('', [
          Validators.required
        ]),
        inGroup: new FormControl(null, [
          Validators.required
        ])
      });
    }
  }

  get name() { return this.stackForm.controls.name; }

  get inGroup() { return this.stackForm.controls.inGroup; }

  async submitForm(): Promise<void> {
    const data = {
      name: this.stackForm.value.name,
      inGroup: Number(this.stackForm.value.inGroup)
    }
    if (!this.modalService.editMode) {
      try {
        await this.stackService.createStack(data);
        this.alertService.activateAlert('success', 'Stapel erfolgreich angelegt');
        this.stackForm.reset();
      } catch (e) {
        this.alertService.activateAlert('error', e);
      }
    } else {
      try {
        await this.stackService.updateStack(this.stack.id, data);
        this.alertService.activateAlert('success', 'Stapel erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e);
      }
    }
  }

}
