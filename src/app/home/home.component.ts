import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceService } from '../service.service';
import { SeoService } from '../service/seo.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  // @ViewChild('counter')
  // counter: any;
  // param1 = 0;
  // param2 = 0;
  // param3 = 0;
  // param4 = 0;

  // duration = 3000;

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onWindowScroll() {
  //   var rect = this.counter.nativeElement.getBoundingClientRect();
  //   var elemTop = rect.top;
  //   var elemBottom = rect.bottom;
  //   (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param1 = 600 : null;
  //   (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param2 = 9000 : null;
  //   (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param3 = 10 : null;
  //   (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param4 = 216 : null;
  // }

  constructor(public service: ServiceService, public seoService: SeoService) {
    this.seoService.setMetaTags(
      'HasnaTech - Your Partner in Innovation', // Title
      'We deliver web development, AI services, and eLearning solutions to drive innovation and growth.', // Description
      'HasnaTech, web development, AI solutions, eLearning services, technology consulting', // Keywords
      'https://hasnatech.com/assets/images/home-banner.jpg', // Image URL
      'https://hasnatech.com/' // Page URL
    );
  }
  // ngOnInit(): void {
  //   $(".owl-carousel").owlCarousel({
  //     items: 1,
  //     margin: 10,
  //     loop: false,
  //     nav: true,
  //     dots: true,
  //   });
  // }

  

  testimonials = [
    {
      "header": "Exceptional Learning Solutions",
      "describe": "Hasna Technology transformed our training with their outstanding eLearning and LMS solutions. They're the go-to choice for cutting-edge learning technology. Exceptional service!",
      "name": "Linda Patel",
      "title": "Learning & Development Manager",
      "img":"assets/images/avatar/user1.png"
    },
    {
      "header": "Innovative Education Partner",
      "describe": "Hasna Technology's expertise in eLearning and LMS implementation is unparalleled. They've taken our educational programs to new heights. Top-notch service and innovation!",
      "name": "Robert Lee",
      "title": "Academic Director",
      "img":"assets/images/avatar/user2.png"
    },
    {
      "header": "Efficient Workforce Training",
      "describe": "Impressed by Hasna Technology's eLearning solutions! Their customized LMS transformed our workforce training, making it efficient and engaging. A true partner in success!",
      "name": "Maria Rodriguez",
      "title": "HR Manager",
      "img":"assets/images/avatar/user3.png"
    },
    {
      "header": "Streamlined Onboarding",
      "describe": "Hasna Technology's LMS implementation is outstanding! They streamlined our onboarding process with precision. Their support is exceptional. We trust them for all our learning needs.",
      "name": "Christopher Baker",
      "title": "Operations Director",
      "img":"assets/images/avatar/user4.png"
    },
    {
      "header": "Compliance Made Easy",
      "describe": "Hasna Technology is a game-changer in eLearning. Their LMS solutions made compliance training a breeze. Dependable, innovative, and committed to excellence. Highly recommended!",
      "name": "Jennifer Davis",
      "title": "Compliance Manager",
      "img":"assets/images/avatar/user5.png"
    }
  ]



}
