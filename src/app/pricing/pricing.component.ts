import { Component } from '@angular/core';

import { MainService } from '../service/main.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {

  constructor(main:MainService){
    main.setMeta("Pricing", "At Hasna Technology, we believe in offering flexible pricing options that cater to your unique requirements. Whether you're a small business or an enterprise, our pricing plans are designed to provide value and quality, ensuring you receive the best solution for your goals.", 'assets/image/pricing.png');
  }

}
