import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  // faqItems = [
  //   {
  //     question: 'Can I cancel my subscription?',
  //     answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris...',
  //     showAnswer: false
  //   },
  //   {
  //     question: 'Which payment methods do you accept?',
  //     answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris...',
  //     showAnswer: false
  //   },
  //   {
  //     question: 'How can I manage my Account?',
  //     answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris...',
  //     showAnswer: false
  //   },
  //   {
  //     question: 'Is my credit card information secure?',
  //     answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris...',
  //     showAnswer: false
  //   }
  // ];
  //
  // toggleAnswer(item: any) {
  //   item.showAnswer = !item.showAnswer;
  // }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  };

  carouselItems = [
    {
      quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.',
      name: 'Coriss Ambady',
      title: 'Financial Analyst'
    },
    {
      quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.',
      name: 'Cory Zamora',
      title: 'Marketing Specialist'
    },
    {
      quote: 'Vivamus sagittis lacus augue laoreet rutrum faucibus auctor vestibulum ligula porta felis, euismod semper cras justo odio consectetur.',
      name: 'Nikolas Brooten',
      title: 'Sales Manager'
    }
  ];

}
