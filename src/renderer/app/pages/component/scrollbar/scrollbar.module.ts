import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule
} from 'ngx-perfect-scrollbar';
import { ScrollbarComponent } from './scrollbar.component';
import { ScrollbarService } from '@renderer/services/component/scrollbar.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};
const SCROLLBARS_ROUTES = [
  {path: '', component: ScrollbarComponent}
];

@NgModule({
  declarations: [
    ScrollbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    RouterModule.forChild(SCROLLBARS_ROUTES)
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ScrollbarService
  ]
})
export class ScrollbarModule {
}
