import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  activeAlerts: Alert[] = [];

  constructor() {
    this.reset();
  }

  removeAlert(alert: Alert): void {
    this.activeAlerts.splice(this.activeAlerts.indexOf(alert), 1);
  }

  activateAlert(alertType: string, message: string): void {
    this.activeAlerts.push({type: alertType, message: message});
  }

  reset(): void {
    this.activeAlerts = [];
  }

}
