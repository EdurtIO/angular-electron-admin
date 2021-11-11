import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-progressbar',
  templateUrl: './progressbar.component.html'
})
export class ProgressbarComponent implements OnInit {
  public type: string;
  public stacked: any[] = [];

  constructor() {
    this.randomStacked();
  }

  public randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];
    this.stacked = [];
    const n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor((Math.random() * 4));
      const value = Math.floor((Math.random() * 27) + 3);
      this.stacked.push({
        value,
        type: types[index]
      });
    }
  }

  ngOnInit() {
  }
}
