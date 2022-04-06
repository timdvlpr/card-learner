import { Component } from '@angular/core';
import { Stack } from '../../stack/stack.model';
import { Group } from '../../group/group.model';
import { Card } from '../../card/card.model';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-edit-data-modal',
  templateUrl: './edit-data-modal.component.html',
  styleUrls: ['./edit-data-modal.component.scss']
})
export class EditDataModalComponent {
  editType: 'stack' | 'group' | 'card' | '' = '';
  editGroup: Group = {} as Group;
  editStack: Stack = {} as Stack;
  editCard: Card = {} as Card;

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    public alertService: AlertService
  ) {}

  getData(): void {
    this.alertService.reset();
    const modalData = this.ngxSmartModalService.getModalData('edit-data-modal');

    switch (modalData.type) {
      case 'group':
        this.editGroup = modalData.data;
        this.editType = modalData.type;
        break;
      case 'stack':
        this.editStack = modalData.data;
        this.editType = modalData.type;
        break;
      case 'card':
        this.editCard = modalData.data;
        this.editType = modalData.type;
        break;
    }
  }

  closeModal(): void {
    this.ngxSmartModalService.close('edit-data-modal');
  }
}
