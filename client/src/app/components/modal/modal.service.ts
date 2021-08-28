import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { StackService } from '../stack/stack.service';
import { GroupService } from '../group/group.service';
import { CardService } from '../card/card.service';
import { NgxSmartModalService } from "ngx-smart-modal";
import { ModalData } from "./modal-data";


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private location: Location,
    private stackService: StackService,
    private groupService: GroupService,
    private cardService: CardService,
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
