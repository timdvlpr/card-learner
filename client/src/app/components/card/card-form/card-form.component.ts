import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Card } from '../card.model';
import { AlertService } from '../../alert/alert.service';
import { Stack } from '../../stack/stack.model';
import { Subject } from 'rxjs';
import { StackStoreService } from '../../stack/stack-store.service';
import { CardStoreService } from '../card-store.service';
import { NgForm } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnDestroy {

  @ViewChild('cardForm') cardForm: NgForm | undefined;
  @Input() card: Card = {} as Card;
  @Input() type: 'add' | 'edit' = 'add';
  stackOptions: Stack[] = [];
  destroy$ = new Subject();

  constructor(
    private alertService: AlertService,
    private stackStore: StackStoreService,
    private cardStore: CardStoreService
  ) { }

  async submitForm(): Promise<void> {
    if (this.type === 'add') {
      try {
        const inStack = this.card.inStack;
        await this.cardStore.add(this.card);
        this.alertService.activateAlert('success', 'Karte erfolgreich angelegt');
        this.cardForm?.resetForm({ inStack: inStack });
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    } else {
      try {
        await this.cardStore.update(this.card.id, this.card);
        this.alertService.activateAlert('success', 'Karte erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    }
  }

  ngOnInit() {
    this.stackStore.stacks$
      .pipe(takeUntil(this.destroy$))
      .subscribe(stacks => this.stackOptions = stacks);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

