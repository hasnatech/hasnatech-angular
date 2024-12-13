import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';
@Component({
  selector: 'app-language-translation',
  templateUrl: './language-translation.component.html',
  styleUrls: ['./language-translation.component.scss']
})
export class LanguageTranslationComponent {
  // constructor(public service:ServiceService, main:MainService){
  //   
  // }

  constructor(public service: ServiceService, main: MainService, public seoService: SeoService) {
    // main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');

      this.seoService.setMetaTags(
        'Gamification Services - HasnaTech', // Title
        "Transform your training and learning processes with HasnaTech's gamification services. Engage users through interactive, fun, and rewarding experiences.", // Description
        'gamification services, interactive training, game-based learning, employee engagement, HasnaTech solutions', // Keywords
        'https://hasnatech.com/assets/images/gamification-banner.jpg', // Image URL
        'https://hasnatech.com/service/gamification' // Page URL
      );
    }

}
