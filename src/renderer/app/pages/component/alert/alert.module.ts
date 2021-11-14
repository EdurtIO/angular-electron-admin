import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from './alert.component';
import { AlertService } from '@renderer/services/component/alert.service';

const ALERTS_COMPONENT_ROUTES = [
  {path: '', component: AlertsComponent}
];

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forChild(ALERTS_COMPONENT_ROUTES)
  ],
  providers: [
    AlertService
  ]
})
export class AlertsComponentModule {
}
