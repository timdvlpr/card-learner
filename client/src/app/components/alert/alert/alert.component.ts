import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../alert.model';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alert: Alert;
  @Input() message: string = '';
  @Input() type: string = '';
  showAlertTime = 3000;

  constructor(public alertService: AlertService) {
    this.alert = {} as Alert;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.alertService.removeAlert(this.alert);
    }, this.showAlertTime);
  }

}
