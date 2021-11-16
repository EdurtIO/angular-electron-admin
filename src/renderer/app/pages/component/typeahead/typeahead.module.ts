import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TypeaheadComponent } from './typeahead.component';
import { TypeaheadService } from '@renderer/services/component/typeahead.service';

const TYPEAHEAD_ROUTES = [
  {path: '', component: TypeaheadComponent}
];

@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    RouterModule.forChild(TYPEAHEAD_ROUTES)
  ],
  providers: [
    TypeaheadService
  ]
})
export class TypeaheadComponentModule {
}
