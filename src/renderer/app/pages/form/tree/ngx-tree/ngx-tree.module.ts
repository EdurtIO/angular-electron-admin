import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxTreeComponent } from './ngx-tree.component';
import { TreeNgxModule } from 'tree-ngx';
import { NgxTreeService } from '@renderer/services/form/tree/ngx-tree.service';

const TREE_NGX_ROUTES: Routes = [
  {path: '', component: NgxTreeComponent}
];

@NgModule({
  imports: [
    FormsModule,
    TreeNgxModule,
    RouterModule.forChild(TREE_NGX_ROUTES)
  ],
  exports: [],
  declarations: [
    NgxTreeComponent
  ],
  providers: [
    NgxTreeService
  ]
})
export class NgxTreeModule {
}
