import { Component, OnInit } from '@angular/core';
import { ZmdiIconService } from '@renderer/services/icon/zmdi.service';

@Component({
  selector: 'app-icons-zmdi',
  templateUrl: './zmdi.component.html',
  styleUrls: ['./zmdi.component.scss']
})
export class ZmdiComponent implements OnInit {
  icons: [] = this.zmdiIconService.icons;

  constructor(private zmdiIconService: ZmdiIconService) {
  }

  ngOnInit() {
  }
}
