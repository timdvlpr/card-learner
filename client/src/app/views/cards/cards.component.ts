import { Component } from '@angular/core';
import { ModalService } from '../../components/modal/modal.service';
import { CardService } from '../../components/card/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor(
    public modalService: ModalService,
    public cardService: CardService
  ) { }

}
