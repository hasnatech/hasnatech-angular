import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectTab: any;
  // router: any;
  constructor(public service: ServiceService,public router: Router) { }


  showDrop = false

  down() {
    this.showDrop = true
  }
  leave() {
    this.showDrop = false
  }

}

