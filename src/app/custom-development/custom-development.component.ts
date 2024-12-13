import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';


@Component({
  selector: 'app-custom-development',
  templateUrl: './custom-development.component.html',
  styleUrls: ['./custom-development.component.scss']
})
export class CustomDevelopmentComponent {
  constructor(public service:ServiceService, main:MainService, public seoService: SeoService){
    // main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
    this.seoService.setMetaTags(
      'Learning and Development - HasnaTech', // Title
      'Discover how HasnaTech revolutionizes learning and development with cutting-edge technology, customized solutions, and innovative eLearning tools.', // Description
      'learning and development, eLearning tools, customized training solutions, employee training, HasnaTech services', // Keywords
      'https://hasnatech.com/assets/images/learning-development-banner.jpg', // Image URL
      'https://hasnatech.com/service/learning-development' // Page URL
    );
  }

}
