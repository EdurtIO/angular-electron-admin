import { BaseService } from '@renderer/services/component/base.service';
import { AccordionModel } from '@renderer/model/component/accordion.model';

export class AccordionService implements BaseService {
  constructor() {
  }

  builderMockData(): any {
    const accordions: AccordionModel[] = new Array();
    for (let i = 1; i <= 6; i++) {
      const accordion = new AccordionModel();
      accordion.title = 'Just click on me (No' + i + ')';
      accordion.description = 'I\'m No' + i + ' content';
      if (i % 2 === 0) {
        accordion.isDisabled = true;
      }
      accordions.push(accordion);
    }
    return accordions;
  }
}
