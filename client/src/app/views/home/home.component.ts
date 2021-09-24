import { Component } from '@angular/core';
import { ModalData } from '../../components/modal/modal-data';
import { GroupStoreService } from '../../components/group/group-store.service';
import { StackStoreService } from '../../components/stack/stack-store.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private groupStore: GroupStoreService,
    private stackStore: StackStoreService,
    private ngxSmartModalService: NgxSmartModalService
  ) { }

  async delete(data: ModalData): Promise<void> {
    try {
      switch (data.type) {
        case 'group':
          await this.groupStore.remove(data.data!.id!);
          break;
        case 'stack':
          await this.stackStore.remove(data.data!.id!);
          break;
      }
    } catch (e) {
        this.ngxSmartModalService
          .getModal('home-info-modal')
          .setData(e.error.message)
          .open();
    }
  }

}
