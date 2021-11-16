import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  public allAlerts: any = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light'
  ];

  constructor() {
  }
}
