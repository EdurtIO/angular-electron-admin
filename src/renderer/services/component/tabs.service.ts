import { Injectable } from '@angular/core';

@Injectable()
export class TabsService {
  public themes: any = [
    'green',
    'blue',
    'red',
    'amber',
    'black'
  ];
  public tabs: any = [
    {
      title: 'One',
      context: 'One Context'
    },
    {
      title: 'Two',
      context: 'Two Context'
    },
    {
      title: 'Three',
      context: 'Three Context'
    },
    {
      title: 'Four',
      context: 'Four Context'
    }
  ];

  constructor() {
  }
}
