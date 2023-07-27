import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from "./home/about/about.component";
import {ChooseUsComponent} from "./home/choose-us/choose-us.component";
import {SolutionsComponent} from "./home/solutions/solutions.component";
import {StudiesComponent} from "./home/studies/studies.component";
import {HomeComponent} from "./home/home.component";
import {BannerComponent} from "./home/banner/banner.component";
import {EmptyPage1Component} from "./empty/empty-page1/empty-page1.component";
import {EmptyPage2Component} from "./empty/empty-page2/empty-page2.component";
import {WhoAreWeComponent} from "./home/who-are-we/who-are-we.component";

const routes: Routes = [
  { path: 'whoarewe1', component: EmptyPage1Component },
  { path: 'whoarewe2', component: EmptyPage2Component },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'banner', pathMatch: 'full' },
      { path: 'banner', component: BannerComponent },
      { path: 'about', component: AboutComponent },
      { path: 'choose_us', component: ChooseUsComponent },
      { path: 'solutions', component: SolutionsComponent },
      { path: 'studies', component: StudiesComponent },
      { path: 'team', component: WhoAreWeComponent },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
