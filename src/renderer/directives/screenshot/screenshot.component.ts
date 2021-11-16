import { Component, OnInit } from '@angular/core';

const html2canvas = require('html2canvas');

@Component({
  selector: 'app-directive-screenshot',
  templateUrl: './screenshot.component.html'
})
export class ScreenshotComponent implements OnInit {
  screenshotImage: string;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    html2canvas(document.body).then(canvas => {
      this.screenshotImage = canvas.toDataURL('image/png');
    });
  }
}
