import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../card.model';
import { Stack } from '../../../stack/stack.model';
import { Subject } from 'rxjs';
import { StackStoreService } from '../../../stack/services/stack-store.service';
import { CardStoreService } from '../../services/card-store.service';
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
    private stackStore: StackStoreService,
    private cardStore: CardStoreService
  ) {}

  submitForm(): void {
    if (this.type === 'add') {
      const inStack = this.card.inStack;
      this.cardStore.add(this.card);
      this.cardForm?.resetForm({ inStack: inStack });
    } else {
      this.cardStore.update(this.card.id, this.card);
    }
  }

  ngOnInit() {
    this.stackStore.stacks$
      .pipe(takeUntil(this.destroy$))
      .subscribe((stacks) => (this.stackOptions = stacks));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
