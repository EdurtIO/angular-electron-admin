import { Injectable } from '@angular/core';

const supportIcons = require('../../data/icon/fa.json');

@Injectable()
export class FaIconService {
  icons: [];

  constructor() {
    this.icons = supportIcons;
  }
}
