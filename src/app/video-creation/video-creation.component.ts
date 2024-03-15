import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-video-creation',
  templateUrl: './video-creation.component.html',
  styleUrls: ['./video-creation.component.scss']
})
export class VideoCreationComponent {
  constructor(public service:ServiceService, main:MainService){
    main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
  }
}
