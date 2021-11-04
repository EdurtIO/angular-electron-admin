import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemeService {
  theme: string;
  themeSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.theme = 'green';
  }

  setTheme(color) {
    this.theme = color;
    this.themeSubject.next(this.theme);
  }

  supportThemes() {
    const themes: string[] = [
      'green',
      'blue',
      'red',
      'orange',
      'teal',
      'cyan',
      'blue-grey',
      'purple',
      'indigo',
      'lime'
    ];
    return themes;
  }
}
