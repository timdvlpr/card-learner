import { Component, Input } from '@angular/core';
import { Stack } from '../stack.model';
import { ModalService } from '../../modal/modal.service';
import { CardService } from '../../card/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stack-item',
  templateUrl: './stack-item.component.html',
  styleUrls: ['./stack-item.component.scss']
})
export class StackItemComponent {

  @Input() stack: Stack;

  constructor(
    private modalService: ModalService,
    private cardService: CardService,
    private router: Router
  ) {
    this.stack = {} as Stack;
  }

  editStack(): void {
    this.modalService.showEditModal('stack', this.stack);
  }

  deleteStack(): void {
    this.modalService.showConfirmationModal('stack', this.stack);
  }

  learnStack(id: number): void {
    this.router.navigate([`/learn/${id}`])
  }

}
