import { Component } from '@angular/core';
import { NgxSmartModalService } from "ngx-smart-modal";
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-add-data-modal',
  templateUrl: './add-data-modal.component.html',
  styleUrls: ['./add-data-modal.component.scss']
})
export class AddDataModalComponent {

  addType: 'stack' | 'group' | 'card' = 'group';

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    public alertService: AlertService,
  ) { }

  getData(): void {
    this.addType = this.ngxSmartModalService.getModalData('add-data-modal').type;
  }

}
