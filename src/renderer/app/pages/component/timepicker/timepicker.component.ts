import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimePickerComponent implements OnInit {
  isTimePickerEnabled = true;
  timePickerValue: Date = new Date();
  timePickerMeridianValue: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }
}
