import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Stack } from '../stack/stack.model';
import { Group } from '../group/group.model';
import { Card } from '../card/card.model';
import { StackService } from '../stack/stack.service';
import { GroupService } from '../group/group.service';
import { CardService } from '../card/card.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  type: 'stack' | 'group' | 'card';
  editMode = false;
  editObject = {} as Stack | Group | Card;
  deleteObject = {} as Stack | Group | Card;
  confirmationModal = false;
  addEditModal = false;

  constructor(
    private location: Location,
    private stackService: StackService,
    private groupService: GroupService,
    private cardService: CardService
  ) {
    this.type = 'stack';
  }

  setModalType(type: 'stack' | 'group' | 'card'): void {
    this.type = type;
    this.location.go(`/add/${type}`);
  }

  showAddModal(type: 'stack' | 'group' | 'card'): void {
    this.editMode = false;
    this.type = type;
    this.editObject = {} as Stack | Group | Card;
    this.location.go(`/add/${type}`);
    this.addEditModal = true;
  }

  showEditModal(type: 'stack' | 'group' | 'card', object: Stack | Group | Card): void {
    this.editMode = true;
    this.type = type;
    this.editObject = object;
    if (type === 'card') {
      this.location.go(`/edit/${type}`);
    } else {
      this.location.go(`/edit/${type}/${object.slug}`);
    }
    this.addEditModal = true;
  }

  handleClose(): void {
    this.editObject = {} as Stack | Group | Card;
    this.location.go('/');
    this.addEditModal = false;
  }

  showConfirmationModal(type: 'stack' | 'group' | 'card', object: Stack | Group | Card): void {
    this.type = type;
    this.deleteObject = object;
    this.confirmationModal = true;
  }

  async handleConfirmAction(): Promise<void> {
    switch (this.type) {
      case 'group':
        await this.groupService.deleteGroup(this.deleteObject.id);
        await this.stackService.getStacksInGroup(this.groupService.groups[0].id);
        this.groupService.selectedGroup = this.groupService.groups[0].id;
        break;
      case 'stack':
        if ("inGroup" in this.deleteObject) {
          try {
            await this.stackService.deleteStack(this.deleteObject.id, this.deleteObject.inGroup);
          } catch (e) {
            this.stackService.stacks = [];
          }
        }
        break;
      case 'card':
        if ("inStack" in this.deleteObject) {
          try {
            await this.cardService.deleteCard(this.deleteObject.id, this.deleteObject.inStack);
          } catch (e) {
            this.cardService.cards = [];
          }
        }
        break;
    }
    this.confirmationModal = false;
  }

  handleCancelAction(): void {
    this.deleteObject = {} as Stack | Group | Card;
    this.confirmationModal = false;
  }

}
