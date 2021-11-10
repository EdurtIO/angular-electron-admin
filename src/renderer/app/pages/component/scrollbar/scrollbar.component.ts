import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { ScrollbarService } from '@renderer/services/component/scrollbar.service';

@Component({
  selector: 'app-component-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {
  public scrollbarType = '1';
  public config: PerfectScrollbarConfigInterface = {};
  public data: [number];

  public constructor(private scrollbarService: ScrollbarService) {
    this.data = this.scrollbarService.data;
  }

  public toggleType() {
    this.scrollbarType = (this.scrollbarType === '1') ? '2' : '1';
  }

  // Top
  @ViewChild('goToTopScroll')
  goToTopScroll: PerfectScrollbarDirective;

  public goToTop() {
    this.goToTopScroll.scrollToTop();
  }

  // Bottom
  @ViewChild('goToBottomScroll')
  goToBottomScroll: PerfectScrollbarDirective;

  public goToBottom() {
    this.goToBottomScroll.scrollToBottom();
  }

  // Go To Scrollbar
  @ViewChild('goToXYScroll')
  goToXYScroll: PerfectScrollbarDirective;

  public goToXY(x: number, y: number) {
    this.goToXYScroll.scrollTo(x, y, 500);
  }

  // Left
  @ViewChild('goToLeftScroll')
  goToLeftScroll: PerfectScrollbarDirective;

  public goToLeft() {
    this.goToLeftScroll.scrollToLeft();
  }

  // Top
  @ViewChild('goToRightScroll')
  goToRightScroll: PerfectScrollbarDirective;

  public goToRight() {
    this.goToRightScroll.scrollToRight();
  }

  ngOnInit() {
  }
}
