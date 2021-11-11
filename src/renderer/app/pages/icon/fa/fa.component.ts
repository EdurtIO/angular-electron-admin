import { Component, OnInit } from '@angular/core';
import { FaIconService } from '@renderer/services/icon/fa.service';

@Component({
  selector: 'app-icons-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.scss']
})
export class FaComponent implements OnInit {
  icons: [] = this.faIconService.icons;

  constructor(private faIconService: FaIconService) {
  }

  ngOnInit() {
  }
}
