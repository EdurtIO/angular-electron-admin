import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContributionConfig } from './contribution.model';
import * as moment from 'moment';
import * as d3 from 'd3';

@Component({
  selector: 'app-directive-contribution-charts',
  templateUrl: './contribution.component.html',
  styleUrls: [
    './contribution.component.scss'
  ]
})
export class ContributionComponent implements OnInit {
  @ViewChild('contributionCharts')
  element: any;
  // Render data
  @Input()
  data: Array<object>;
  // The configuration file
  @Input()
  config: ContributionConfig;
  @Output()
  handler: EventEmitter<object> = new EventEmitter<object>();
  @Output()
  onChange: EventEmitter<object> = new EventEmitter<object>();
  // default config
  private gutter = 5;
  private itemGutter = 1;
  private width = 1000;
  private height = 200;
  private itemSize = 10;
  private labelPadding = 40;
  private transitionDuration = 500;
  private inTransition = false;
  // tooltip
  private tooltipWidth = 250;
  private tooltipPadding = 15;
  private selected = {};
  // D3
  private svg: any;
  private items: any;
  private labels: any;
  private buttons: any;
  private tooltip: any;

  ngOnInit(): void {
    // If the user does not send the configuration information, the default configuration information is used
    if (!this.config) {
      this.config = new ContributionConfig();
    }
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges() {
    // If render data is empty, throw an exception
    if (!this.data) {
      throw new Error('contribution charts data not null');
    }
  }

  ngAfterViewInit() {
    const element = this.element.nativeElement;
    // Initialize the SVG
    this.svg = d3.select(element)
    .append('svg')
    .attr('class', 'svg');
    // Initialize the SVG global container
    this.items = this.svg.append('g');
    this.labels = this.svg.append('g');
    this.buttons = this.svg.append('g');
    // Add tooltip
    this.tooltip = d3.select(element).append('div')
    .attr('class', 'heatmap-tooltip')
    .style('opacity', 0);
    this.calculateDimensions();
    this.drawChart();
  }

  /**
   * Calculation period data
   */
  getNumberOfWeeks() {
    const dayIndex = Math.round((+moment() - +moment().subtract(1, 'year').startOf('week')) / 86400000);
    const colIndex = Math.trunc(dayIndex / 7);
    const numWeeks = colIndex + 1;
    return numWeeks;
  }

  /**
   * Calculate the dimensions of each indicator of the icon
   */
  calculateDimensions() {
    const element = this.element.nativeElement;
    this.width = element.clientWidth < 1000 ? 1000 : element.clientWidth;
    this.itemSize = ((this.width - this.labelPadding) / this.getNumberOfWeeks() - this.gutter);
    this.height = this.labelPadding + 7 * (this.itemSize + this.gutter);
    this.svg.attr('width', this.width).attr('height', this.height);
  }

  /**
   * Draw diagrams
   */
  drawChart() {
    this.drawYearOverviewChart();
    this.onChange.emit({
      start: moment(this.selected['date']).startOf('year'),
      end: moment(this.selected['date']).endOf('year')
    });
  }

  /**
   * Chart by year
   */
  drawYearOverviewChart() {
    moment.locale(this.config.locale);
    // Define start/end times
    const startYear = moment(this.selected['date']).startOf('year');
    const endYear = moment(this.selected['date']).endOf('year');
    // Fill in annual data
    let yearData;
    if (!this.config.isFill) {
      // No padding data, display data filtering based on passing
      yearData = this.data.filter((d: any) => startYear <= moment(d.date) && moment(d.date) < endYear);
    }
    // Calculates the maximum value of data in the current year
    const maxValue = d3.max(yearData, (d: any) => d.total);
    const color = d3.scaleLinear<string>().range(['#ffffff', this.config.color]).domain([-0.15 * maxValue, maxValue]);
    // Clear data to prevent duplication of previous data
    this.items.selectAll('.item-circle').remove();
    // Render annual data to chart
    this.items.selectAll('.item-circle').data(yearData).enter().append('rect')
    .attr('class', 'item item-circle').style('opacity', 0)
    .attr('x', (item: any) => this.calcItemX(item, startYear) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
    .attr('y', (item: any) => this.calcItemY(item) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
    .attr('width', (item: any) => this.calcItemSize(item, maxValue))
    .attr('height', (item: any) => this.calcItemSize(item, maxValue))
    .attr('fill', (item: any) => (item.total > 0) ? color(item.total) : this.config.fillColor)
    .on('mouseover', (item: any) => {
      if (this.inTransition) {
        return;
      }
      const circle = d3.select(d3.event.currentTarget);
      const repeat = () => {
        circle.transition().duration(this.transitionDuration).ease(d3.easeLinear)
        .attr('x', (item: any) => this.calcItemX(item, startYear) - (this.itemSize * 1.1 - this.itemSize) / 2)
        .attr('y', (item: any) => this.calcItemY(item) - (this.itemSize * 1.1 - this.itemSize) / 2)
        .attr('width', this.itemSize * 1.1)
        .attr('height', this.itemSize * 1.1)
        .transition().duration(this.transitionDuration).ease(d3.easeLinear)
        .attr('x', (item: any) => this.calcItemX(item, startYear) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
        .attr('y', (item: any) => this.calcItemY(item) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
        .attr('width', (item: any) => this.calcItemSize(item, maxValue))
        .attr('height', (item: any) => this.calcItemSize(item, maxValue))
        .on('end', repeat);
      };
      repeat();
      // tooltip
      const tooltipHtml = '<div><strong>' + (item.total ? item.total : '0') +
        ' A piece of data is created from ' + moment(item.date).format('dddd, MMM Do YYYY') + '</strong></div>';
      let x = this.calcItemX(item, startYear) + this.itemSize / 2;
      if (this.width - x < (this.tooltipWidth + this.tooltipPadding * 3)) {
        x -= this.tooltipWidth + this.tooltipPadding * 2;
      }
      const y = this.calcItemY(item) + this.itemSize / 2;
      this.tooltip.html(tooltipHtml).style('left', x + 'px')
      .style('top', y + 'px').transition().duration(this.transitionDuration / 2)
      .ease(d3.easeLinear).style('opacity', 1);
    })
    .on('mouseout', () => {
      if (this.inTransition) {
        return;
      }
      d3.select(d3.event.currentTarget).transition()
      .duration(this.transitionDuration / 2).ease(d3.easeLinear)
      .attr('x', (item: any) => this.calcItemX(item, startYear) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
      .attr('y', (item: any) => this.calcItemY(item) + (this.itemSize - this.calcItemSize(item, maxValue)) / 2)
      .attr('width', (item: any) => this.calcItemSize(item, maxValue))
      .attr('height', (item: any) => this.calcItemSize(item, maxValue));
      this.hideTooltip();
    })
    .transition()
    .delay(() => (Math.cos(Math.PI * Math.random()) + 1) * this.transitionDuration)
    .duration(() => this.transitionDuration)
    .ease(d3.easeLinear).style('opacity', 1)
    .call((transition: any, callback: any) => {
      if (transition.empty()) {
        callback();
      }
      let n = 0;
      transition
      .each(() => ++n)
      .on('end', function() {
        if (!--n) {
          callback.apply(this, arguments);
        }
      });
    }, () => {
      this.inTransition = false;
    });
    // Renders all months of the current year
    const monthLabels = d3.timeMonths(startYear.toDate(), endYear.toDate());
    const monthScale = d3.scaleLinear().range([0, this.width]).domain([0, monthLabels.length]);
    this.labels.selectAll('.label-month').remove();
    this.labels.selectAll('.label-month').data(monthLabels)
    .enter().append('text').attr('class', 'label label-month')
    .attr('font-size', () => Math.floor(this.labelPadding / 3) + 'px')
    .text((item: any) => item.toLocaleDateString(this.config.locale, {month: 'short'}))
    .attr('x', (item: any, i: number) => monthScale(i) + (monthScale(i) - monthScale(i - 1)) / 2)
    .attr('y', this.labelPadding / 2)
    .on('mouseenter', (item: any) => {
      if (this.inTransition) {
        return;
      }
      // When the mouse moves to, all the days under the current month are extracted and highlighted
      const selectedMonth = moment(item);
      this.items.selectAll('.item-circle').transition()
      .duration(this.transitionDuration).ease(d3.easeLinear)
      .style('opacity', (monthItem: any) => moment(monthItem.date).isSame(selectedMonth, 'month') ? 1 : 0.1);
    })
    .on('mouseout', () => {
      if (this.inTransition) {
        return;
      }
      this.items.selectAll('.item-circle').transition()
      .duration(this.transitionDuration).ease(d3.easeLinear).style('opacity', 1);
    });
    // Render weekly data
    const dayLabels = d3.timeDays(
      moment().startOf('week').toDate(),
      moment().endOf('week').toDate()
    );
    const dayScale = d3.scaleBand()
    .rangeRound([this.labelPadding, this.height])
    .domain(dayLabels.map((d: any) => moment(d).weekday().toString()));
    this.labels.selectAll('.label-day').remove();
    this.labels.selectAll('.label-day').data(dayLabels).enter()
    .append('text').attr('class', 'label label-day').attr('x', this.labelPadding / 3)
    .attr('y', (item: any, i: number) => dayScale((i).toString()) + dayScale.bandwidth() / 1.75)
    .style('text-anchor', 'left')
    .attr('font-size', () => Math.floor(this.labelPadding / 3) + 'px')
    .text((item: any) => {
      // If Chinese time zone, cut the last digit of Chinese character
      if (this.config.locale === 'zh-cn') {
        return moment(item).format('dddd')[2];
      }
      return moment(item).format('dddd')[0];
    })
    .on('mouseenter', (item: any) => {
      if (this.inTransition) {
        return;
      }
      const selected_day = moment(item);
      this.items.selectAll('.item-circle').transition()
      .duration(this.transitionDuration).ease(d3.easeLinear)
      .style('opacity', (d: any) => (moment(d.date).day() === selected_day.day()) ? 1 : 0.1);
    })
    .on('mouseout', () => {
      if (this.inTransition) {
        return;
      }
      this.items.selectAll('.item-circle').transition().duration(this.transitionDuration)
      .ease(d3.easeLinear).style('opacity', 1);
    });
  }

  /**
   * Compute the X-axis position of the element
   *
   * @param item element
   * @param startYear Start the year
   */
  calcItemX(item: any, startYear: any) {
    const date = moment(item.date);
    const dayIndex = Math.round((+date - +moment(startYear).startOf('week')) / 86400000);
    const colIndex = Math.trunc(dayIndex / 7);
    return colIndex * (this.itemSize + this.gutter) + this.labelPadding;
  }

  /**
   * Computes the Y position of the current element
   *
   * @param item element
   */
  calcItemY(item: any) {
    return this.labelPadding + moment(item.date).weekday() * (this.itemSize + this.gutter);
  }

  /**
   * Computes the current element size
   *
   * @param item The current element
   * @param max The maximum
   */
  calcItemSize(item: any, max: number) {
    if (max <= 0) {
      return this.itemSize;
    }
    return this.itemSize * 0.75 + (this.itemSize * item.total / max) * 0.25;
  }

  hideTooltip() {
    this.tooltip.transition()
    .duration(this.transitionDuration / 2)
    .ease(d3.easeLinear)
    .style('opacity', 0);
  }

  formatTime(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let time = '';
    if (hours > 0) {
      time += hours === 1 ? '1 hour ' : hours + ' hours ';
    }
    if (minutes > 0) {
      time += minutes === 1 ? '1 minute' : minutes + ' minutes';
    }
    if (hours === 0 && minutes === 0) {
      time = Math.round(seconds) + ' seconds';
    }
    return time;
  }
}
