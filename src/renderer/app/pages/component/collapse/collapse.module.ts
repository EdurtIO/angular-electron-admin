import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapseComponent } from './collapse.component';

const COLLAPSE_ROUTES = [
  {path: '', component: CollapseComponent}
];

@NgModule({
  declarations: [
    CollapseComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forChild(COLLAPSE_ROUTES)
  ]
})
export class CollapseComponentModule {
}
