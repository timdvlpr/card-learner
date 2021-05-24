import { Component, Input } from '@angular/core';
import { Stack } from '../stack.model';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss']
})
export class StackItemComponent {

  @Input() stack: Stack;

  constructor(private modalService: ModalService) {
    this.stack = {} as Stack;
  }

  editStack(): void {
    this.modalService.showEditModal('stack', this.stack);
  }

  deleteStack() {
    this.modalService.showConfirmationModal('stack', this.stack);
  }

}
