import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimePickerComponent } from './timepicker.component';

const TIMEPICKER_COMPONENT_ROUTES = [
  {path: '', component: TimePickerComponent}
];

@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    RouterModule.forChild(TIMEPICKER_COMPONENT_ROUTES)
  ]
})
export class TimepickerComponentModule {
}
