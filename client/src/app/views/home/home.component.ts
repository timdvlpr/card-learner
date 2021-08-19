import { Component, OnDestroy } from '@angular/core';
import { StackService } from '../../components/stack/stack.service';
import { ModalService } from '../../components/modal/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../components/group/group.service';
import { CardService } from '../../components/card/card.service';
import { Subscription } from 'rxjs';
import { Stack } from '../../components/stack/stack.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private subRoute: Subscription;
  private subStacks: Subscription;
  stacks: Stack[] = [];

  constructor(
    private stackService: StackService,
    private groupService: GroupService,
    private cardService: CardService,
    private modalService: ModalService,
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
    this.subStacks = this.stackService.findAll()
      .subscribe(stacks => this.stacks = stacks);
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
            .then(stack => this.modalService.showEditModal('stack', stack))
            .catch(() => this.router.navigate(['home']))
          break;
        case 'group':
          this.groupService.getGroup(slug)
            .then(group => this.modalService.showEditModal('group', group))
            .catch(() => this.router.navigate(['home']))
          break;
        default:
          this.router.navigate(['home']);
          break;
      }
  }

  showAddModal(): void {
    this.modalService.showAddModal('stack');
  }

  ngOnDestroy() {
    this.subRoute.unsubscribe();
    this.subStacks.unsubscribe();
  }

}
