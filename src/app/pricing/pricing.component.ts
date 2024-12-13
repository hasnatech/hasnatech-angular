import { Component } from '@angular/core';

import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  constructor(main:MainService, public seoService: SeoService){
    this.seoService.setMetaTags(
      'Pricing - Affordable Solutions with HasnaTech', // Title
      "Explore HasnaTech's pricing plans and find the right technology solution for your budget.", // Description
      'HasnaTech pricing, technology solutions, affordable IT services', // Keywords
      'https://hasnatech.com/assets/images/pricing-banner.jpg', // Image URL
      'https://hasnatech.com/pricing' // Page URL
    );
    // main.setMeta("Pricing", "At Hasna Technology, we believe in offering flexible pricing options that cater to your unique requirements. Whether you're a small business or an enterprise, our pricing plans are designed to provide value and quality, ensuring you receive the best solution for your goals.", 'assets/image/pricing.png');
  }

}
