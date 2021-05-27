import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
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
