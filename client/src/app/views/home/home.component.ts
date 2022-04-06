import { Component } from '@angular/core';
import { ModalData } from '../../components/modal/modal-data';
import { GroupStoreService } from '../../components/group/group-store.service';
import { StackStoreService } from '../../components/stack/stack-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private groupStore: GroupStoreService,
    private stackStore: StackStoreService
  ) {}

  delete(data: ModalData): void {
    switch (data.type) {
      case 'group':
        this.groupStore.remove(data.data!.id!);
        break;
      case 'stack':
        this.stackStore.remove(data.data!.id!);
        break;
    }
  }
}
