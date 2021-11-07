import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-tooltips',
  templateUrl: './tooltips.component.html'
})
export class TooltipsComponent implements OnInit {
  content: string = 'Displays the content sent from the back end';

  constructor() {
  }

  ngOnInit() {
  }
}
