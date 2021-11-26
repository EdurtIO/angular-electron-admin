import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@renderer/services/layout/navigation.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('toggleHeight', [
      state('inactive', style({
        height: '0',
        opacity: '0'
      })),
      state('active', style({
        height: '*',
        opacity: '1'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class NavigationComponent implements OnInit {
  sidebarVisible: boolean;
  navigationSubState: any = {
    Icon: 'inactive',
    Component: 'inactive',
    Directive: 'inactive',
    Error: 'inactive',
    Form: 'inactive',
    Other: 'inactive',
    Editor: 'inactive'
  };

  constructor(private navigationService: NavigationService) {
    navigationService.sidebarVisibilitySubject.subscribe((value) => {
      this.sidebarVisible = value;
    });
  }

  toggleNavigationSub(menu, event) {
    event.preventDefault();
    this.navigationSubState[menu] = (this.navigationSubState[menu] === 'inactive' ? 'active' : 'inactive');
  }

  ngOnInit() {
  }
}
