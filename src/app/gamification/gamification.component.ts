import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.scss']
})
export class GamificationComponent {
  constructor(public service: ServiceService, main: MainService) {
    main.setMeta("Unlock the Power of eLearning Gamification", "In the ever-evolving world of education and training, eLearning has become a powerful tool for imparting knowledge and skills. To make the learning experience even more engaging, effective, and enjoyable, eLearning gamification has emerged as a game-changer. Gamification transforms traditional learning methods into interactive, game-like experiences that captivate learners, foster engagement, and enhance retention.", 'assets/image/custom-development.png');
  }

}
