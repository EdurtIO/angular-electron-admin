import { Component } from '@angular/core';
import { NgxTreeService } from '@renderer/services/form/tree/ngx-tree.service';
import { NgxTreeModel } from '@renderer/model/form/ngx-tree.model';

@Component({
  selector: 'app-component-ngx-tree',
  templateUrl: './ngx-tree.component.html'
})
export class NgxTreeComponent {
  nodeItems: NgxTreeModel[];
  options = {
    checkboxes: true,
    alwaysEmitSelected: false
  };

  constructor(private ngxTreeService: NgxTreeService) {
    this.nodeItems = this.ngxTreeService.builderMockData();
  }
}
