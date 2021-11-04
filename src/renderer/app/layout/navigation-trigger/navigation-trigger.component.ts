import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/layout/navigation.service';

@Component({
  selector: 'app-navigation-trigger',
  templateUrl: './navigation-trigger.component.html',
  styleUrls: ['./navigation-trigger.component.scss']
})
export class NavigationTriggerComponent implements OnInit {
  sidebarVisible: boolean;

  constructor(private navigationService: NavigationService) {
    navigationService.sidebarVisibilitySubject.subscribe((value) => {
      this.sidebarVisible = value;
    });
  }

  toggleSidebarVisibility() {
    this.navigationService.toggleSidebarVisibility();
  }

  ngOnInit() {
  }
}
