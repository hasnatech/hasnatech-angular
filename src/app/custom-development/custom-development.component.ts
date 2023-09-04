import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-custom-development',
  templateUrl: './custom-development.component.html',
  styleUrls: ['./custom-development.component.scss']
})
export class CustomDevelopmentComponent {
  constructor(public service:ServiceService,public router: Router){}


  gonextContact() {
    this.router.navigate(['/', 'Contactus']);
  }
}
