import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';

const TOOLTIPS_ROUTES = [
  {path: '', component: TooltipsComponent}
];

@NgModule({
  declarations: [
    TooltipsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(TOOLTIPS_ROUTES)
  ]
})
export class TooltipsComponentModule {
}
