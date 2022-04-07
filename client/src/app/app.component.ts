import { Component } from '@angular/core';
import { AlertService } from './features/alert/alert.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('alertAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1rem)' }),
        animate('200ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('200ms', style({ opacity: 0, transform: 'translateY(-1rem)' }))
      ])
    ])
  ]
})
export class AppComponent {
  constructor(public alertService: AlertService) {}
}
