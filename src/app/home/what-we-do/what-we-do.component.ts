import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { CarouselComponent } from 'ngx-bootstrap/carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent{
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
