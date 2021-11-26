import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FaIconService } from '@renderer/services/icon/fa.service';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CodemirrorComponent } from '@renderer/app/pages/editor/codemirror/codemirror.component';

const EDITOR_CODEMIRROR_ROUTES = [
  {path: '', component: CodemirrorComponent}
];

@NgModule({
  declarations: [
    CodemirrorComponent
  ],
  imports: [
    CommonModule,
    CodemirrorModule,
    RouterModule.forChild(EDITOR_CODEMIRROR_ROUTES)
  ],
  providers: [
    FaIconService
  ]
})
export class CodemirrorComponentModule {
}
