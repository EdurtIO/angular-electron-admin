import { Component, OnInit } from '@angular/core';
import { TabsService } from '@renderer/services/component/tabs.service';

@Component({
  selector: 'app-component-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {
  public tabs: [];
  public themes: [];

  constructor(private tabsService: TabsService) {
    this.tabs = this.tabsService.tabs;
    this.themes = this.tabsService.themes;
  }

  ngOnInit() {
  }
}
