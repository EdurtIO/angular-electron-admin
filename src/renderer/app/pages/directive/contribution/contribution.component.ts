import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as d3 from 'd3';
import { PackageUtils } from '@renderer/utils/package.utils';

@Component({
  selector: 'app-root',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.scss']
})
export class DirectiveContributionComponent implements OnInit {
  public data;
  public version: string;

  constructor() {
    this.version = PackageUtils.get('version');
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    moment.locale('zh_cn');
    // Initialize random data for the demo
    const now = moment().endOf('year').toDate();
    const timeAgo = moment().startOf('day').subtract(10, 'year').toDate();
    this.data = d3.timeDays(timeAgo, now).map((dateElement: any, index: number) => ({
      date: dateElement,
      details: Array.apply(null, new Array(Math.floor(Math.random() * 15))).map((e: number, i: number, arr: any) => ({
        date: function() {
          const projectDate = new Date(dateElement.getTime());
          projectDate.setHours(Math.floor(Math.random() * 24));
          projectDate.setMinutes(Math.floor(Math.random() * 60));
          return projectDate;
        }(),
        value: 3600 * ((arr.length - i) / 5) + Math.floor(Math.random() * 3600) * Math.round(Math.random() * (index / 365))
      })),
      init() {
        this.total = this.details.reduce((prev: number, e: any) => prev + e.value, 0);
        return this;
      }
    }.init()));
  }
}
