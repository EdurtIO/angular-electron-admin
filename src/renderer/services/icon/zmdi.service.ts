import { Injectable } from '@angular/core';

const supportIcons = require('../../data/icon/zmdi.json');

@Injectable()
export class ZmdiIconService {
  icons: [];

  constructor() {
    this.icons = supportIcons;
  }
}
