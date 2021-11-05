import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-clipboard',
  templateUrl: './clipboard.component.html'
})
export class ClipboardComponent implements OnInit {
  text: string = 'This is a Text';

  constructor() {
  }

  ngOnInit() {
  }
}
