import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../card.model';
import {ModalService} from '../../modal/modal.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card: Card;
  previewQuestion: string = '';

  constructor(private modalService: ModalService) {
    this.card = {} as Card;
  }

  editCard(): void {
    this.modalService.showEditModal('card', this.card);
  }

  deleteCard(): void {
    this.modalService.showConfirmationModal('card', this.card);
  }

  transformCard(characters: number): string {
    const question = this.card.question as string;
    return question.substr(0, characters) + ' ...';
  }

  ngOnInit() {
    this.previewQuestion = this.transformCard(100);
  }

}
