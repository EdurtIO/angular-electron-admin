import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastyComponent } from './toasty.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

const TOASTY_ROUTES = [
  {path: '', component: ToastyComponent}
];

@NgModule({
  declarations: [
    ToastyComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    RouterModule.forChild(TOASTY_ROUTES)
  ],
  providers: [
    {
      provide: ToastrService,
      useClass: ToastrService
    }
  ]
})
export class ToastyComponentModule {
}
