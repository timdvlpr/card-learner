import { Group } from '../group/group.model';
import { Card } from '../card/card.model';
import { Stack } from '../stack/stack.model';

export class ModalData {
  type?: 'group' | 'card' | 'stack'
  data?: Group | Card | Stack

  constructor(type?: 'group' | 'card' | 'stack', data?: Group | Card | Stack) {
    this.type = type;
    this.data = data;
  }
}
