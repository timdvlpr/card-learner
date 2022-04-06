import { Injectable } from '@angular/core';
import { Alert } from './alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  activeAlerts: Alert[] = [];

  constructor() {}

  removeAlert(): void {
    this.activeAlerts.shift();
  }

  activateAlert(alertType: string, message: string): void {
    this.activeAlerts.push({ type: alertType, message: message });
  }

  reset(): void {
    this.activeAlerts = [];
  }
}
