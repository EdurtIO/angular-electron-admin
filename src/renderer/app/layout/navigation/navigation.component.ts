import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@renderer/services/layout/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  sidebarVisible: boolean;

  constructor(private navigationService: NavigationService) {
    navigationService.sidebarVisibilitySubject.subscribe((value) => {
      this.sidebarVisible = value;
    });
  }

  ngOnInit() {
  }
}
