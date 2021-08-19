import { Component, OnDestroy, OnInit } from '@angular/core';
import { StackService } from '../stack.service';
import { CardService } from '../../card/card.service';
import { Stack } from '../stack.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit, OnDestroy {

  stacks: Stack[] = [];
  filteredStacks: Stack[] = [];
  selectedStack = -1;
  subStacks: Subscription;
  subCards: Subscription;
  loading = true;

  constructor(
    private cardService: CardService,
    private stackService: StackService
  ) {
    this.subStacks = this.stackService.findAll()
      .subscribe(stacks => {
        this.stacks = stacks;
        this.filteredStacks = this.stacks;
      })
    this.subCards = this.cardService.findAll()
      .subscribe(cards =>  {
        if (cards.length > 0) {
          this.selectedStack = cards[0].inStack
        }
      })
  }

  selectStack(id: number): void {
    this.cardService.getCardsInStack(id)
      .then(() => this.selectedStack = id)
      .catch(() => this.selectedStack = id);
  }

  filterStacks(stacks: Stack[]): void {
    this.filteredStacks = stacks;
  }

  async ngOnInit() {
    try {
      await this.stackService.getStacks();
      this.stacks = this.stackService.stacks;
      this.filteredStacks = this.stacks;
      this.selectedStack = this.stackService.stacks[0].id;
    } catch (e) {
      this.stackService.updateStacks([]);
    }
    try {
      await this.cardService.getCardsInStack(this.selectedStack);
    } catch (e) {
      this.cardService.updateCards([]);
    }
    this.loading = false;
  }

  ngOnDestroy() {
    this.subStacks.unsubscribe();
    this.subCards.unsubscribe();
  }

}
