import { AfterViewInit, Component } from '@angular/core';
import { TypeaheadService } from '@renderer/services/component/typeahead.service';

@Component({
  selector: 'app-component-typeahead',
  templateUrl: './typeahead.component.html'
})
export class TypeaheadComponent implements AfterViewInit {
  selected: string;
  states: string[];

  constructor(private typeaheadService: TypeaheadService) {
  }

  ngAfterViewInit() {
    this.states = this.typeaheadService.states;
  }
}
