import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalData } from '../modal-data';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-delete-data-modal',
  templateUrl: './delete-data-modal.component.html',
  styleUrls: ['./delete-data-modal.component.scss']
})
export class DeleteDataModalComponent {

  modalData: ModalData = new ModalData();

  @Output() deleteEvent = new EventEmitter<ModalData>();

  constructor(
    private modalService: ModalService,
    private ngxSmartModalService: NgxSmartModalService
  ) { }

  getData(): void {
    this.modalData = this.ngxSmartModalService.getModalData('delete-data-modal');
  }

  confirm(): void {
    this.deleteEvent.emit(this.modalData);
    this.ngxSmartModalService.close('delete-data-modal');
  }

  closeModal(): void {
    this.ngxSmartModalService.resetModalData('delete-data-modal');
    this.ngxSmartModalService.close('delete-data-modal');
  }

}
