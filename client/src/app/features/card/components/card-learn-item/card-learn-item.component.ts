import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-card-learn-item',
  templateUrl: './card-learn-item.component.html',
  styleUrls: ['./card-learn-item.component.scss'],
  animations: [
    trigger('openClose', [
      transition('open => closed', [
        animate(
          '0.5s',
          keyframes([
            style({ transform: 'rotateX(180deg)' }),
            style({ transform: 'rotateX(0)' })
          ])
        )
      ]),
      transition('closed => open', [
        animate(
          '0.5s',
          keyframes([
            style({ transform: 'rotateX(180deg)' }),
            style({ transform: 'rotateX(0)' })
          ])
        )
      ])
    ])
  ]
})
export class CardLearnItemComponent {
  @Input() question = '';
  @Input() answer = '';
  @Input() showAnswer = false;
  @Output() toggleCardEvent = new EventEmitter<boolean>();

  flipCard(): void {
    this.toggleCardEvent.emit(!this.showAnswer);
  }
}
