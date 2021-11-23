import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-dropdown',
  templateUrl: './dropdown.component.html',
  styles: [
    '.dropdown-demo {\n' +
    '  margin: 10px 10px 0 0;\n' +
    '  display: inline-block;\n' +
    '}'
  ]
})
export class DropdownsComponent implements OnInit {
  public disabled = false;

  constructor() {
  }

  ngOnInit() {
  }
}
