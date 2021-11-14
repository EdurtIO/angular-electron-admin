import { Component, OnInit } from '@angular/core';
import { AlertService } from '@renderer/services/component/alert.service';

@Component({
  selector: 'app-component-alert',
  templateUrl: './alert.component.html'
})
export class AlertsComponent implements OnInit {
  public allAlerts: [];

  constructor(private alertService: AlertService) {
    this.allAlerts = this.alertService.allAlerts;
  }

  ngOnInit() {
  }
}
