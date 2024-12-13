import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';


@Component({
  selector: 'app-staff-augmentation',
  templateUrl: './staff-augmentation.component.html',
  styleUrls: ['./staff-augmentation.component.scss']
})
export class StaffAugmentationComponent {


  constructor(public router: Router,main:MainService, public seoService: SeoService) { 
    this.seoService.setMetaTags(
      'About HasnaTech - Transforming Ideas into Reality', // Title
      'Discover how HasnaTech blends technology and innovation to deliver top-notch solutions.', // Description
      'About HasnaTech, company profile, technology solutions, IT consulting', // Keywords
      'https://hasnatech.com/assets/images/about-us-banner.jpg', // Image URL
      'https://hasnatech.com/about-us' // Page URL
    );
    // main.setMeta("Learning Management System", 'A learning management system (LMS) is a piece of software that allows a business to store, manage, provide, and track all training-related materials.', 'assets/image/lms.png');
  }

}
