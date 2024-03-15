import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-ai-service',
  templateUrl: './ai-service.component.html',
  styleUrls: ['./ai-service.component.scss']
})
export class AiServiceComponent {
  constructor(public router: Router, main: MainService) {
    main.setMeta("Learning Management System", 'A learning management system (LMS) is a piece of software that allows a business to store, manage, provide, and track all training-related materials.', 'assets/image/lms.png');
  }
}
