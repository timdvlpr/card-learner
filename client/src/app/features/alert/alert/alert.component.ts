import { AfterViewInit, Component, Input } from '@angular/core';
import { Alert } from '../alert.model';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements AfterViewInit {

  @Input() alert = {} as Alert;
  @Input() message = '';
  @Input() type = '';
  remainingTime = 3;

  constructor(private alertService: AlertService) { }

  startRemainingTime(): void {
    const interval = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime < 1) {
        this.alertService.removeAlert();
        clearInterval(interval);
      }
    }, 1000);
  }

  ngAfterViewInit() {
    this.startRemainingTime();
  }

}
