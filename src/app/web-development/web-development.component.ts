import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent {
  constructor(public service:ServiceService, main:MainService, public seoService: SeoService){
    this.seoService.setMetaTags(
      'Web Development Services - HasnaTech', // Title
      'HasnaTech offers expert web development services, including custom websites, eCommerce solutions, and more.', // Description
      'web development, ecommerce development, Angular, React, Vue.js, custom websites', // Keywords
      'https://hasnatech.com/assets/images/web-development.jpg', // Image URL
      'https://hasnatech.com/service/web-development' // Page URL
    );    // main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
  }
}
