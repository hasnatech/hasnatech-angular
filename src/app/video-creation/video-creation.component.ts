import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-video-creation',
  templateUrl: './video-creation.component.html',
  styleUrls: ['./video-creation.component.scss']
})
export class VideoCreationComponent {
  constructor(public service: ServiceService, main: MainService, public seoService: SeoService) {// main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
    this.seoService.setMetaTags(
      'Video Creation Services - HasnaTech', // Title
      "Create stunning videos that captivate your audience with HasnaTech's video creation services.", // Description
      'video creation, video editing, multimedia services', // Keywords
      'https://hasnatech.com/assets/images/video-creation.jpg', // Image URL
      'https://hasnatech.com/service/video-creation' // Page URL
    );
  }
}
