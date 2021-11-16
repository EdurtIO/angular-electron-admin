import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { SortableComponent } from './sortable.component';
import { SortableService } from '@renderer/services/component/sortable.service';

const SORTABLE_ROUTES = [
  {path: '', component: SortableComponent}
];

@NgModule({
  declarations: [
    SortableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    RouterModule.forChild(SORTABLE_ROUTES)
  ],
  providers: [
    SortableService
  ]
})
export class SortableComponentModule {
}
