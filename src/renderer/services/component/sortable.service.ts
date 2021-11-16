import { Injectable } from '@angular/core';

@Injectable()
export class SortableService {
  public sortableData: any[] = [
    '1111111111',
    '2222222222',
    '3333333333',
    '4444444444',
    '5555555555',
    '6666666666'
  ];
  public sortableComplexData: any[] = [
    {id: 1, name: '1111111111'},
    {id: 2, name: '2222222222'},
    {id: 3, name: '3333333333'},
    {id: 4, name: '4444444444'},
    {id: 5, name: '5555555555'},
    {id: 6, name: '6666666666'}
  ];

  constructor() {
  }
}
