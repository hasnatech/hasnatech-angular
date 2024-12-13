import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-scorm',
  templateUrl: './scorm.component.html',
  styleUrls: ['./scorm.component.scss']
})
export class ScormComponent {
  constructor(public service: ServiceService, main: MainService, public seoService: SeoService) { // main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');

      this.seoService.setMetaTags(
        'SCORM Compliance Services - HasnaTech', // Title
        "Ensure your eLearning content meets SCORM standards with HasnaTech's compliance services. Deliver seamless and standardized learning experiences across platforms.", // Description
        'SCORM compliance, SCORM standards, eLearning content, standardized learning, HasnaTech SCORM solutions', // Keywords
        'https://hasnatech.com/assets/images/scorm-banner.jpg', // Image URL
        'https://hasnatech.com/service/scorm' // Page URL
      );
    }
}
