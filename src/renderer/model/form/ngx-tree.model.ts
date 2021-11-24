import { BaseModel } from '@renderer/model/base.model';

export class NgxTreeModel extends BaseModel {
  public children: Array<NgxTreeModel>;
}
