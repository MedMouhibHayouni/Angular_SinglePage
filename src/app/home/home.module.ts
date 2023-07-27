import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { StudiesComponent } from './studies/studies.component';
import { PricingComponent } from './pricing/pricing.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ChooseUsComponent,
    SolutionsComponent,
    StudiesComponent,

    PricingComponent,
    WhatWeDoComponent,
    WhoAreWeComponent
  ],
  imports: [
    CommonModule,
    NgbCarousel
  ]
})
export class HomeModule { }
