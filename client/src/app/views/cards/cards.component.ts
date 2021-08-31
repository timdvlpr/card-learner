import { Component } from '@angular/core';
import { ModalData } from '../../components/modal/modal-data';
import { CardStoreService } from '../../components/card/card-store.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor(
    private cardStore: CardStoreService
  ) { }

  delete(data: ModalData): void {
    if (data.type === 'card') {
      this.cardStore.removeCard(data.data!.id!);
    }
  }

}
