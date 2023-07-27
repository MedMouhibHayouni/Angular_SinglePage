import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebPage_SmarConseil';
  // Adjust this value as needed to control the speed of the progress
  scrollSpeed = 0.8;

  onClickProgress() {
    // Find the banner section element by its ID
    const bannerSection = document.getElementById('banner');

    // Scroll the page to the banner section smoothly
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit() {
    // Initialize the progress circle on page load
    this.updateProgress();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update the progress circle on scroll
    this.updateProgress();
  }

  updateProgress() {
    const progressCircle = document.getElementById('progress-path');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const contentHeight = document.documentElement.scrollHeight;

    // Calculate the percentage of how far the user has scrolled
    const scrollPercentage = (scrollPosition / (contentHeight - windowHeight)) * 100;

    // Calculate the stroke-dashoffset value based on the scroll percentage
    const circumference = 307.919;
    const offset = circumference - (scrollPercentage / 100) * circumference;

    // Update the stroke-dashoffset style
    if (progressCircle) {
      progressCircle.style.strokeDashoffset = offset.toString();
    }
  }


}
