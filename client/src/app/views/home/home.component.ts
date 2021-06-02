import { Component, OnDestroy } from '@angular/core';
import { StackService } from '../../components/stack/stack.service';
import { ModalService } from '../../components/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../components/group/group.service';
import { CardService } from '../../components/card/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private subRoute: Subscription;

  constructor(
    public stackService: StackService,
    private groupService: GroupService,
    private cardService: CardService,
    public modalService: ModalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subRoute = this.route.params.subscribe(params => {
      if (params['addType']) {
        this.checkAddRoute(params['addType']);
      }
      if (params['editType'] && params['slug']) {
        this.checkEditRoute(params['editType'], params['slug']);
      }
    });
  }

  checkAddRoute(type: string): void {
    switch (type) {
      case 'stack':
        this.modalService.showAddModal('stack');
        break;
      case 'group':
        this.modalService.showAddModal('group');
        break;
      case 'card':
        this.modalService.showAddModal('card');
        break;
      default:
        this.router.navigate(['home']);
        break;
    }
  }

  checkEditRoute(type: string, slug: string): void {
      switch (type) {
        case 'stack':
          this.stackService.getStack(slug)
            .then(() => this.modalService.showEditModal('stack', this.stackService.stack));
          break;
        case 'group':
          this.groupService.getGroup(slug)
            .then(() => this.modalService.showEditModal('group', this.groupService.group));
          break;
        default:
          this.router.navigate(['home']);
          break;
      }
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
  }

}
