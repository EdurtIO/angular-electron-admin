import { Component, OnInit } from '@angular/core';
import { PackageUtils } from '@renderer/utils/package.utils';

@Component({
  selector: 'app-directive-screenshot-example',
  templateUrl: './screenshot.component.html'
})
export class DirectiveScreenshotComponent implements OnInit {
  public version: string;

  constructor() {
    this.version = PackageUtils.get('version');
  }

  ngOnInit(): void {
  }
}
