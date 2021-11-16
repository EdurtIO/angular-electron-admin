import { Component, OnInit } from '@angular/core';
import { SortableService } from '@renderer/services/component/sortable.service';

@Component({
  selector: 'app-component-sortable',
  templateUrl: './sortable.component.html'
})
export class SortableComponent implements OnInit {
  sortableData: any[];
  sortableComplexData: any[];

  constructor(private sortableService: SortableService) {
    this.sortableData = this.sortableService.sortableData;
    this.sortableComplexData = this.sortableService.sortableComplexData;
  }

  ngOnInit() {
  }
}
