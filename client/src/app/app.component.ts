import { Component } from '@angular/core';
import { AlertService } from './components/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public alertService: AlertService) {}
}
