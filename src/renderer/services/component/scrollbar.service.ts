import { Injectable } from '@angular/core';

@Injectable()
export class ScrollbarService {
  data: any = [];

  constructor() {
    for (let i = 0; i <= 100; i++) {
      this.data.push(i);
    }
  }
}
