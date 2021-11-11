import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './carousel.component';
import { CarouselService } from '@renderer/services/component/carousel.service';

const CAROUSEL_ROUTES = [
  {path: '', component: CarouselComponent}
];

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forChild(CAROUSEL_ROUTES)
  ],
  providers: [
    CarouselService
  ]
})
export class CarouselComponentModule {
}
