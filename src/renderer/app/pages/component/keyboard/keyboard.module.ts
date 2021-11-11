import { NgModule } from '@angular/core';
import { KeyboardComponent } from '@renderer/app/pages/component/keyboard/keyboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const KEYBOARD_ROUTES = [
  {path: '', component: KeyboardComponent}
];

@NgModule({
  declarations: [
    KeyboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(KEYBOARD_ROUTES)
  ],
  providers: []
})
export class KeyboardModule {
}
