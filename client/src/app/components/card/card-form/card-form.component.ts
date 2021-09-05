import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Card } from '../card.model';
import { AlertService } from '../../alert/alert.service';
import { Stack } from '../../stack/stack.model';
import { Subscription } from 'rxjs';
import { StackStoreService } from '../../stack/stack-store.service';
import { CardStoreService } from '../card-store.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnDestroy {

  @ViewChild('cardForm') cardForm: NgForm | undefined;
  @Input() card: Card = {} as Card;
  @Input() type: 'add' | 'edit' = 'add';
  stackOptions: Stack[] = [];
  subStacks: Subscription;

  constructor(
    private alertService: AlertService,
    private stackStore: StackStoreService,
    private cardStore: CardStoreService
  ) {
    this.subStacks = this.stackStore.stacks$
      .subscribe(stacks => this.stackOptions = stacks);
  }

  async submitForm(): Promise<void> {
    if (this.type === 'add') {
      try {
        await this.cardStore.addCard(this.card);
        this.alertService.activateAlert('success', 'Karte erfolgreich angelegt');
        this.cardForm?.resetForm();
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    } else {
      try {
        await this.cardStore.updateCard(this.card.id, this.card);
        this.alertService.activateAlert('success', 'Karte erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    }
  }

  ngOnDestroy() {
    this.subStacks.unsubscribe();
  }

}

