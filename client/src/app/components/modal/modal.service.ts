import { Injectable } from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";
import { ModalData } from "./modal-data";


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private ngxSmartModalService: NgxSmartModalService
  ) { }

  openModalWithData(modalId: string, data: ModalData) {
    this.ngxSmartModalService
      .getModal(modalId)
      .setData(data, true)
      .open();
  }

  openModal(modalId: string) {
    this.ngxSmartModalService
      .getModal(modalId)
      .open();
  }

}
