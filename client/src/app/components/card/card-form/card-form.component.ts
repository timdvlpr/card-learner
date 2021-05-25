import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Card } from '../card.model';
import { StackService } from '../../stack/stack.service';
import { AlertService } from '../../alert/alert.service';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent{

  cardForm: FormGroup;
  card: Card;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private cardService: CardService,
    public modalService: ModalService,
    public stackService: StackService
  ) {
    this.card = this.modalService.editObject as Card;
    if (this.modalService.editMode) {
      this.cardForm = this.fb.group({
        question: new FormControl(this.card.question, [Validators.required]),
        answer: new FormControl(this.card.answer, [Validators.required]),
        inStack: new FormControl(this.card.inStack, [Validators.required])
      });
    } else {
      this.cardForm = this.fb.group({
        question: new FormControl('', [Validators.required]),
        answer: new FormControl('', [Validators.required]),
        inStack: new FormControl(null, [Validators.required])
      });
    }
  }

  get question() { return this.cardForm.controls.question; }

  get answer() { return this.cardForm.controls.answer; }

  get inStack() { return this.cardForm.controls.inStack; }

  async submitForm(): Promise<void> {
    const data = {
      question: this.cardForm.value.question,
      answer: this.cardForm.value.answer,
      inStack: Number(this.cardForm.value.inStack)
    }
    if (!this.modalService.editMode) {
      try {
        await this.cardService.createCard(data);
        this.alertService.activateAlert('success', 'Karte erfolgreich angelegt');
        this.cardForm.reset();
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    } else {
      try {
        await this.cardService.updateCard(this.card.id, data);
        this.alertService.activateAlert('success', 'Karte erfolgreich bearbeitet');
      } catch (e) {
        this.alertService.activateAlert('error', e.error.message);
      }
    }
  }

}
