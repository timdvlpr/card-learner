import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import { Alert } from './alert.model';

describe('AlertService', () => {
  let service: AlertService;
  const mockAlerts: Alert[] = [
    {
      type: 'error',
      message: 'alert error message'
    },
    {
      type: 'success',
      message: 'alert success message'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset alerts', () => {
    service.activeAlerts = mockAlerts;
    service.reset();
    expect(service.activeAlerts).toEqual([]);
  });

  it('should activate alert', () => {
    service.activateAlert({ type: 'error', message: 'error message' });
    expect(service.activeAlerts.length).toBe(1);
  });

  it('should remove alert', () => {
    service.activeAlerts = mockAlerts;
    service.removeAlert();
    expect(service.activeAlerts).toEqual([
      { type: 'success', message: 'alert success message' }
    ]);
  });
});
