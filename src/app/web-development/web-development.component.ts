import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent {
  constructor(public router: Router,main:MainService) { 
    main.setMeta("Learning Management System", 'A learning management system (LMS) is a piece of software that allows a business to store, manage, provide, and track all training-related materials.', 'assets/image/lms.png');
  }
}
