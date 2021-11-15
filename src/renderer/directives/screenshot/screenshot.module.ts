import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScreenshotComponent } from './screenshot.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [
    ScreenshotComponent
  ],
  exports: [
    ScreenshotComponent
  ],
  providers: []
})
export class ScreenshotModule {
}
