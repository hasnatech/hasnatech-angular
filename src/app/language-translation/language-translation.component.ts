import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';
@Component({
  selector: 'app-language-translation',
  templateUrl: './language-translation.component.html',
  styleUrls: ['./language-translation.component.scss']
})
export class LanguageTranslationComponent {
  constructor(public service:ServiceService, main:MainService){
    main.setMeta("Custom Development", "In the ever-evolving landscape of e-learning, we understand that one size doesn't fit all. That's why we offer a range of specialized services to meet your unique requirements", 'assets/image/custom-development.png');
  }
}
