import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { AlertService } from "../../alert/alert.service";
import { modalAnimation } from '../../../shared/animations';

@Component({
  selector: 'app-add-edit-modal',
  templateUrl: './add-edit-modal.component.html',
  styleUrls: ['./add-edit-modal.component.scss'],
  animations: [modalAnimation]
})
export class AddEditModalComponent {

  constructor(public modalService: ModalService, public alertService: AlertService) { }

}
