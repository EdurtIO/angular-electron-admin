import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DatepickerService } from '@renderer/services/component/datepicker.service';

@Component({
  selector: 'app-component-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent implements OnInit {
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
  bsValue: Date = new Date();
  colorTheme = 'theme-green';
  colorThemes = [];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private datepickerService: DatepickerService) {
    this.colorThemes = this.datepickerService.themes;
  }

  applyTheme(pop: any) {
    this.bsConfig = Object.assign({}, {containerClass: this.colorTheme});
    setTimeout(() => {
      pop.show();
    });
  }

  ngOnInit() {
  }
}
