import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  @ViewChild('counterWrapper', { static: false }) counterWrapper!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observeCounters();
  }

  observeCounters(): void {
    const options = {
      threshold: 0.3 // Adjust the threshold as needed based on your preference
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.counterWrapper.nativeElement);
  }

  startCounting(): void {
    const counters = this.counterWrapper.nativeElement.querySelectorAll('.counter');
    counters.forEach((counter: HTMLElement, index: number) => {
      const targetNumber = parseInt(counter.textContent!, 10);
      this.animateCount(counter, targetNumber, 2000); // Set the duration (in milliseconds) for counting animation
    });
  }

  animateCount(counterElement: HTMLElement, targetNumber: number, duration: number): void {
    const startTime = performance.now();
    const startNumber = 0;

    const updateCounter = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      if (elapsedTime >= duration) {
        counterElement.textContent = String(targetNumber);
      } else {
        const progress = elapsedTime / duration;
        const currentNumber = Math.round(progress * targetNumber);
        counterElement.textContent = String(currentNumber);
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }
}
