import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  constructor(public service:ServiceService,main:MainService){
    main.setMeta("About Us", 'Welcome to Hasna Technology International Private Limited – your gateway to cutting-edge e-learning and software solutions. With a strong presence in Singapore, we are a premier software development company dedicated to delivering excellence through innovation.', 'assets/image/about-us.png');
  }

}
