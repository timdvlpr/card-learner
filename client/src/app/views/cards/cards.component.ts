import { Component } from '@angular/core';
import { ModalData } from '../../features/modal/modal-data';
import { CardStoreService } from '../../features/card/services/card-store.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  constructor(private cardStore: CardStoreService) {}

  delete(data: ModalData): void {
    if (data.type === 'card') {
      this.cardStore.remove(data.data!.id!);
    }
  }
}
