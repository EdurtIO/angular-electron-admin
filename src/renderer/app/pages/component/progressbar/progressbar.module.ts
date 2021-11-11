import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressbarComponent } from './progressbar.component';

const PROGRESSBAR_ROUTES = [
  {path: '', component: ProgressbarComponent}
];

@NgModule({
  declarations: [
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forChild(PROGRESSBAR_ROUTES)
  ]
})
export class ProgressbarComponentModule {
}
