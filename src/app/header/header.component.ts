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
  gonextContact() {
    this.router.navigate(['/', 'Contactus']);
  }
  gonexthome() {
    this.router.navigate(['/', 'home']);
  }
  gonextAboutus() {
    this.router.navigate(['/', 'Aboutus']);
  }
  gonextManagementsystem() {
    this.router.navigate(['/', 'Managementsystem']);
  }
  gonextStaffAugmentation() {
    this.router.navigate(['/', 'StaffAugmentation1']);
  }
  gonextCustomDevelopment() {
    this.router.navigate(['/', 'CustomDevelopment']);
  }
  gonextPricing() {
    this.router.navigate(['/', 'Pricing']);
  }
}

