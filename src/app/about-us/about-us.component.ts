import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

    constructor(public service: ServiceService, public seoService: SeoService) {
      this.seoService.setMetaTags(
        'About HasnaTech - Transforming Ideas into Reality', // Title
        'Discover how HasnaTech blends technology and innovation to deliver top-notch solutions.', // Description
        'About HasnaTech, company profile, technology solutions, IT consulting', // Keywords
        'https://hasnatech.com/assets/images/about-us-banner.jpg', // Image URL
        'https://hasnatech.com/about-us' // Page URL
      );
    }

}
