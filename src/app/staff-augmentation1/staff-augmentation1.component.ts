import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';
@Component({
  selector: 'app-staff-augmentation1',
  templateUrl: './staff-augmentation1.component.html',
  styleUrls: ['./staff-augmentation1.component.scss']
})
export class StaffAugmentation1Component {
  constructor(public service:ServiceService, main:MainService, public seoService: SeoService){
    // main.setMeta("Staff Augmentation", "In the dynamic landscape of today's business world, staying agile and responsive is key to success. Yet, skill gaps and varying project demands can pose significant challenges. Introducing our Staff Augmentation service – a solution crafted to address your needs promptly and effectively.", 'assets/image/staff-augmentation.png');
    this.seoService.setMetaTags(
      'Staff Augmentation Services - HasnaTech', // Title
      "Scale your team with HasnaTech’s expert staff augmentation services.", // Description
      'staff augmentation, IT staffing, team scaling', // Keywords
      'https://hasnatech.com/assets/images/staff-augmentation.jpg', // Image URL
      'https://hasnatech.com/service/staff-augmentation' // Page URL
    );
  }

}
