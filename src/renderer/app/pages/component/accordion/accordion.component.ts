import { Component, OnInit } from '@angular/core';
import { AccordionService } from '@renderer/services/component/accordion.service';
import { AccordionModel } from '@renderer/model/component/accordion.model';

@Component({
  selector: 'app-component-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {
  accordions: AccordionModel[];

  constructor(private accordionService: AccordionService) {
    this.accordions = this.accordionService.builderMockData();
  }

  ngOnInit() {
  }
}
