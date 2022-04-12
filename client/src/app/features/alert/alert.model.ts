type AlertType = 'success' | 'error' | 'warning';

export interface Alert {
  type: AlertType;
  message: string;
}
