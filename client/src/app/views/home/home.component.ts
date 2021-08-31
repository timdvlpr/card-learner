import { Component } from '@angular/core';
import { StackService } from '../../components/stack/stack.service';
import { ModalService } from '../../components/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../components/group/group.service';
import { CardService } from '../../components/card/card.service';
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
    private stackService: StackService,
    private groupService: GroupService,
    private cardService: CardService,
    private modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router,
    private groupStore: GroupStoreService,
    private stackStore: StackStoreService
  ) { }

  delete(data: ModalData): void {
    switch (data.type) {
      case 'group':
        this.groupStore.removeGroup(data.data!.id!)
        break;
      case 'stack':
        this.stackStore.removeStack(data.data!.id!);
        break;
    }
  }

}
