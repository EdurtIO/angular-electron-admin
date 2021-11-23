import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NavigationService {
  // Controls whether the menu is displayed
  sidebarVisible: boolean;
  sidebarVisibilitySubject: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sidebarVisible = false;
  }

  toggleSidebarVisibility() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarVisibilitySubject.next(this.sidebarVisible);
  }
}
