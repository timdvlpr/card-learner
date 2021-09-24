import { Component } from '@angular/core';
import { ModalData } from '../../components/modal/modal-data';
import { CardStoreService } from '../../components/card/card-store.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor(
    private cardStore: CardStoreService,
    private ngxSmartModalService: NgxSmartModalService
  ) { }

  async delete(data: ModalData): Promise<void> {
    if (data.type === 'card') {
      try {
        await this.cardStore.remove(data.data!.id!);
      } catch (e) {
        this.ngxSmartModalService
          .getModal('cards-info-modal')
          .setData(e.error.message)
          .open();
      }
    }
  }

}
