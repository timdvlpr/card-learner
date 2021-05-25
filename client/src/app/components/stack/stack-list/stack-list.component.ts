import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { StackService } from '../stack.service';
import { CardService } from '../../card/card.service';
import { Stack } from '../stack.model';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit {

  constructor(
    public modalService: ModalService,
    private cardService: CardService,
    public stackService: StackService
  ) { }

  selectStack(id: number): void {
    this.cardService.getCardsInStack(id)
      .then(() => this.stackService.selectedStack = id)
      .catch(() => this.stackService.selectedStack = id);
  }

  editStack(stack: Stack) {
    this.modalService.showEditModal('stack', stack);
  }

  deleteStack(stack: Stack) {
    this.modalService.showConfirmationModal('stack', stack);
  }

  async ngOnInit(): Promise<void> {
    await this.stackService.getStacks();
    this.stackService.selectedStack = this.stackService.stacks[0].id;
    await this.cardService.getCardsInStack(this.stackService.selectedStack);
  }

}
