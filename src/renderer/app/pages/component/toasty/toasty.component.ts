import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-component-toasty',
  templateUrl: './toasty.component.html'
})
export class ToastyComponent implements OnInit {
  context: string = 'I\'m a toasty!';

  constructor(private toastyService: ToastrService) {
  }

  ngOnInit() {
  }

  showToasty(type: string) {
    switch (type) {
      case 'info':
        this.toastyService.info(this.context);
        break;
      case 'success':
        this.toastyService.success(this.context);
        break;
      case 'warning':
        this.toastyService.warning(this.context);
        break;
      case 'error':
        this.toastyService.error(this.context);
        break;
    }
  }
}
