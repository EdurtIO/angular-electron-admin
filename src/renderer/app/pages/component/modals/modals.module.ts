import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

const MODALS_ROUTES = [
  {path: '', component: ModalsComponent}
];

@NgModule({
  declarations: [
    ModalsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forChild(MODALS_ROUTES)
  ]
})
export class ModalsModule {
}
