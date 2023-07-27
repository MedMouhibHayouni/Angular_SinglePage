import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-empty-page2',
  templateUrl: './empty-page2.component.html',
  styleUrls: ['./empty-page2.component.css']
})
export class EmptyPage2Component {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToBanner(): void {
    this.router.navigate(['/banner']);
  }
}
