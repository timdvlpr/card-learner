import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Stack } from '../stack/stack.model';
import { Group } from '../group/group.model';
import { Card } from '../card/card.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  type: 'stack' | 'group' | 'card';
  editMode = false;
  editObject = {} as Stack | Group | Card;
  confirmationModal = false;
  addEditModal = false;

  constructor(private location: Location) {
    this.type = 'stack';
  }

  setModalType(type: 'stack' | 'group' | 'card'): void {
    this.type = type;
  }

  showAddModal(type: 'stack' | 'group' | 'card'): void {
    this.editMode = false;
    this.type = type;
    this.editObject = {} as Stack | Group;
    this.location.go(`/add/${type}`);
    this.addEditModal = true;
  }

  showEditModal(type: 'stack' | 'group' | 'card', object: Stack | Group): void {
    this.editMode = true;
    this.type = type;
    this.editObject = object;
    this.location.go(`/edit/${type}/${object.slug}`);
    this.addEditModal = true;
  }

}
