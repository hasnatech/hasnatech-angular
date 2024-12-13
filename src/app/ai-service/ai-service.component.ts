import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';


@Component({
  selector: 'app-ai-service',
  templateUrl: './ai-service.component.html',
  styleUrls: ['./ai-service.component.scss']
})
export class AiServiceComponent {
  constructor(public service:ServiceService, main:MainService, public seoService: SeoService) {
    // main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
    this.seoService.setMetaTags(
      'AI Services - HasnaTech', // Title
      'HasnaTech provides cutting-edge AI services, including machine learning, natural language processing, and AI automation solutions.', // Description
      'AI services, machine learning, natural language processing, AI automation', // Keywords
      'https://hasnatech.com/assets/images/ai-services.jpg', // Image URL
      'https://hasnatech.com/service/ai-service' // Page URL
    );
  }
}
