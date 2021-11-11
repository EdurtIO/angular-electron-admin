import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker.component';
import { DatepickerService } from '@renderer/services/component/datepicker.service';

const DATEPICKER_ROUTES = [
  {path: '', component: DatepickerComponent}
];

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(DATEPICKER_ROUTES)
  ],
  providers: [
    DatepickerService
  ]
})
export class DatepickerModule {
}
