import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectTab:any;
  constructor(public service:ServiceService){}

}
