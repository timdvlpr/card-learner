import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-data-modal',
  templateUrl: './add-data-modal.component.html',
  styleUrls: ['./add-data-modal.component.scss']
})
export class AddDataModalComponent {
  addType: 'stack' | 'group' | 'card' = 'group';

  constructor(
    private ngxSmartModalService: NgxSmartModalService,
    private location: Location
  ) {}

  getData(): void {
    this.addType =
      this.ngxSmartModalService.getModalData('add-data-modal').type;
  }

  setAddType(type: 'stack' | 'group' | 'card') {
    this.addType = type;
  }

  closeModal(): void {
    this.ngxSmartModalService.close('add-data-modal');
  }

  locateBack(): void {
    this.location.back();
  }
}
