import { Component, OnInit } from '@angular/core';
import { CarouselService } from '@renderer/services/component/carousel.service';

@Component({
  selector: 'app-component-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  public defaultCarousels: any = [];

  constructor(private carouselService: CarouselService) {
    this.defaultCarousels = this.carouselService.builderCarousels();
  }

  ngOnInit() {
  }
}
