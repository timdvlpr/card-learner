import { Component, Input } from '@angular/core';
import { Stack } from '../../stack.model';
import { ModalService } from '../../../modal/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss']
})
export class StackItemComponent {
  @Input() stack: Stack = {} as Stack;

  constructor(private modalService: ModalService, private router: Router) {}

  editStack(): void {
    const stack = new Stack(
      this.stack.id,
      this.stack.name,
      this.stack.slug,
      this.stack.inGroup
    );
    this.modalService.openModalWithData('edit-data-modal', {
      type: 'stack',
      data: stack
    });
  }

  deleteStack(): void {
    this.modalService.openModalWithData('delete-data-modal', {
      type: 'stack',
      data: this.stack
    });
  }

  learnStack(): void {
    this.router.navigate([`/learn/${this.stack.slug}`]);
  }
}
