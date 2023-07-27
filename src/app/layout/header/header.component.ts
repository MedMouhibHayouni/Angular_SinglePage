import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('dropdownMenu') dropdownMenu: ElementRef | undefined;
  isSubMenuOpen: boolean = false;

  @HostListener('click')
  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: any) {
    if (!this.dropdownMenu?.nativeElement.contains(target)) {
      this.isSubMenuOpen = false;
    }
  }

  navigateToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onScroll() {
    // Check the scroll position
    this.isScrolled = window.scrollY > 100; // Adjust the value as needed
  }

  toHome(){
    document.getElementById('banner')?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:"smooth"});
  }
  toChoose(){
    document.getElementById('choose_us')?.scrollIntoView({behavior:"smooth"});
  }
  toSolutions(){
    document.getElementById('solutions')?.scrollIntoView({behavior:"smooth"});
  }
  toStudies(){
    document.getElementById('studies')?.scrollIntoView({behavior:"smooth"});
  }
  toTeam(){
    document.getElementById('team')?.scrollIntoView({behavior:"smooth"});

  }


}
