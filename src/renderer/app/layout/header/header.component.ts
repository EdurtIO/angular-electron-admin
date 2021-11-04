import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@renderer/services/layout/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
// @ts-ignore
export class HeaderComponent implements OnInit {
  theme: string = this.themeService.theme;
  themes: string[] = this.themeService.supportThemes();

  constructor(private themeService: ThemeService) {
    themeService.themeSubject.subscribe((value) => {
      this.theme = value;
    });
  }

  setTheme() {
    this.themeService.setTheme(this.theme);
  }

  ngOnInit() {
  }
}
