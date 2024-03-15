import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-video-creation',
  templateUrl: './video-creation.component.html',
  styleUrls: ['./video-creation.component.scss']
})
export class VideoCreationComponent {
  constructor(public router: Router, main: MainService) {
    main.setMeta("Learning Management System", 'A learning management system (LMS) is a piece of software that allows a business to store, manage, provide, and track all training-related materials.', 'assets/image/lms.png');
  }
}
