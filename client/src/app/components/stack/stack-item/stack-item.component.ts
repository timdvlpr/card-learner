import { Component, Input } from '@angular/core';
import { Stack } from '../stack.model';
import { ModalService } from '../../modal/modal.service';
import { StackService } from '../stack.service';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss']
})
export class StackItemComponent {

  @Input() stack: Stack;

  constructor(private modalService: ModalService, private stackService: StackService) {
    this.stack = {} as Stack;
  }

  editStack(type: 'stack', stack: Stack): void {
    this.modalService.showEditModal(type, stack);
  }

  deleteStack(id: number) {
    this.stackService.deleteStack(id);
  }

}
