import { Injectable } from '@angular/core';

@Injectable()
export class DatepickerService {
  public themes: any = [
    'theme-default',
    'theme-green',
    'theme-blue',
    'theme-dark-blue',
    'theme-red',
    'theme-orange'
  ];

  constructor() {
  }
}
