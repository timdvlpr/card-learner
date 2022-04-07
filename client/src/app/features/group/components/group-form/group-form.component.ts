import { Component, Input, ViewChild } from '@angular/core';
import { Group } from '../../group.model';
import { GroupStoreService } from '../../services/group-store.service';
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

  constructor(private groupStore: GroupStoreService) {}

  submitForm(): void {
    if (this.type === 'add') {
      this.groupStore.add(this.group);
      this.groupForm!.resetForm();
    } else {
      this.groupStore.update(this.group.id!, this.group);
    }
  }
}
