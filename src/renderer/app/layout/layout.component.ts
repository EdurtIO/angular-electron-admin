import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@renderer/services/layout/theme.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
// @ts-ignore
export class LayoutComponent implements OnInit {
  theme: string = this.themeService.theme;

  constructor(private themeService: ThemeService) {
    themeService.themeSubject.subscribe((value) => {
      this.theme = value;
    });
  }

  ngOnInit() {
  }
}
