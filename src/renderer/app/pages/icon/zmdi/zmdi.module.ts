import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ZmdiComponent } from './zmdi.component';
import { ZmdiIconService } from '@renderer/services/icon/zmdi.service';

const ICONS_ZMDI_ROUTES = [
  {path: '', component: ZmdiComponent}
];

@NgModule({
  declarations: [
    ZmdiComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(ICONS_ZMDI_ROUTES)
  ],
  providers: [
    ZmdiIconService
  ]
})
export class IconsZmdiModule {
}
