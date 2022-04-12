import { Component, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
  @Input() identifier = '';
  text = '';

  constructor(private ngxSmartModalService: NgxSmartModalService) {}

  getData(): void {
    this.text = this.ngxSmartModalService.getModalData(this.identifier);
  }

  closeModal(): void {
    this.ngxSmartModalService.close(this.identifier);
  }
}
