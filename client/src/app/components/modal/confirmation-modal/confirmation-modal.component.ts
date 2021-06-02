import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { modalAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  animations: [modalAnimation]
})
export class ConfirmationModalComponent {

  constructor(public modalService: ModalService) { }

  confirmAction(): void {
    this.modalService.handleConfirmAction();
  }

  cancelAction(): void {
    this.modalService.handleCancelAction();
  }

}
