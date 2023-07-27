import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-empty-page1',
  templateUrl: './empty-page1.component.html',
  styleUrls: ['./empty-page1.component.css']
})
export class EmptyPage1Component {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToBanner(): void {
    this.router.navigate(['/banner']);
  }
}
