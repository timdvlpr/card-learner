import { Component, Input } from '@angular/core';
import { ModalService } from '../modal.service';
import { Stack } from '../../stack/stack.model';
import { Group } from '../../group/group.model';
import { Card } from '../../card/card.model';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  @Input() object: Stack | Group | Card;

  constructor(public modalService: ModalService) {
    this.object = {} as Stack | Group | Card;
  }

  confirmAction(): void {
    this.modalService.handleConfirmAction();
  }

  cancelAction(): void {
    this.modalService.handleCancelAction();
  }

}
