import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardComponent } from './clipboard.component';

const CLIPBOARD_ROUTES = [
  {path: '', component: ClipboardComponent}
];

@NgModule({
  declarations: [
    ClipboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
    RouterModule.forChild(CLIPBOARD_ROUTES)
  ]
})
export class ComponentClipboardModule {
}
