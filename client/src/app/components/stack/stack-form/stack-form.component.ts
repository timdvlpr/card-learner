import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Stack } from '../stack.model';
import { AlertService } from '../../alert/alert.service';
import { GroupStoreService } from '../../group/group-store.service';
import { Group } from '../../group/group.model';
import { Subscription } from 'rxjs';
import { StackStoreService } from '../stack-store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stack-form',
  templateUrl: './stack-form.component.html',
  styleUrls: ['./stack-form.component.scss']
})
export class StackFormComponent implements OnDestroy {

  @ViewChild('stackForm') stackForm: NgForm | undefined;
  @Input() stack: Stack = {} as Stack;
  @Input() type: 'add' | 'edit' = 'add';
  groupOptions: Group[] = [];
  subGroups: Subscription;

  constructor(
    private alertService: AlertService,
    private groupStore: GroupStoreService,
    private stackStore: StackStoreService,
  ) {
    this.subGroups = this.groupStore.groups$
      .subscribe(groups => this.groupOptions = groups);
  }

  async submitForm(): Promise<void> {
    if (this.type === 'add') {
      try {
        await this.stackStore.add(this.stack);
        this.alertService.activateAlert('success', 'Stapel erfolgreich angelegt');
        this.stackForm!.resetForm();
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    } else {
      try {
        await this.stackStore.update(this.stack.id, this.stack);
        this.alertService.activateAlert('success', 'Stapel erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    }
  }

  ngOnDestroy() {
    this.subGroups.unsubscribe();
  }

}
