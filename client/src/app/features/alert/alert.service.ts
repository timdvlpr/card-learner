import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  activeAlerts: Alert[] = [];

  removeAlert(): void {
    this.activeAlerts.shift();
  }

  activateAlert(alert: Alert): void {
    this.activeAlerts.push(alert);
  }

  reset(): void {
    this.activeAlerts = [];
  }
}
