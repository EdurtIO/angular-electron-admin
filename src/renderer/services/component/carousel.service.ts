import { Injectable } from '@angular/core';

@Injectable()
export class CarouselService {
  constructor() {
  }

  builderCarousels() {
    const carousels = [
      {
        image: 'https://cdn.pixabay.com/photo/2016/02/11/14/59/fruits-1193727_1280.png',
        title: 'fruits',
        description: 'Description'
      },
      {
        url: 'https://cdn.pixabay.com/photo/2016/09/05/18/54/texture-1647380_1280.jpg',
        title: 'texture',
        description: 'Description'
      },
      {
        image: 'https://cdn.pixabay.com/photo/2018/05/12/19/20/mosaic-3394375_1280.jpg',
        title: 'mosaic',
        description: 'Description'
      }
    ];
    return carousels;
  }
}
