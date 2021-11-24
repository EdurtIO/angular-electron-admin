import { BaseService } from '@renderer/services/component/base.service';
import { NgxTreeModel } from '@renderer/model/form/ngx-tree.model';

export class NgxTreeService implements BaseService {
  builderMockData(): any {
    const treeData: Array<NgxTreeModel> = new Array<NgxTreeModel>();
    for (let i = 1; i <= 6; i++) {
      const ngxTree = new NgxTreeModel();
      ngxTree.id = i;
      ngxTree.name = 'Tree No : ' + i;
      if (i % 2 === 0) {
        const treeDataItems: NgxTreeModel[] = new Array<NgxTreeModel>();
        for (let v = 1; v <= 3; v++) {
          const ngxTreeItem = new NgxTreeModel();
          ngxTreeItem.id = v;
          ngxTreeItem.name = 'Tree Item No : ' + i;
          treeDataItems.push(ngxTreeItem);
        }
        ngxTree.children = treeDataItems;
      }
      treeData.push(ngxTree);
    }
    return treeData;
  }
}
