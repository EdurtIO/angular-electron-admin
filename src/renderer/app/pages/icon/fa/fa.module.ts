import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FaComponent } from './fa.component';
import { FaIconService } from '@renderer/services/icon/fa.service';

const ICONS_FA_ROUTES = [
  {path: '', component: FaComponent}
];

@NgModule({
  declarations: [
    FaComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(ICONS_FA_ROUTES)
  ],
  providers: [
    FaIconService
  ]
})
export class IconsFaModule {
}
