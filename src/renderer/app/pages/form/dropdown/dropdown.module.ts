import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownsComponent } from './dropdown.component';

const DROPDOWNS_ROUTES = [
  {path: '', component: DropdownsComponent}
];

@NgModule({
  declarations: [
    DropdownsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(DROPDOWNS_ROUTES)
  ]
})
export class DropdownComponentModule {
}
