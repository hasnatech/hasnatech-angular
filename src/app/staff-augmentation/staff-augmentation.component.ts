import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-augmentation',
  templateUrl: './staff-augmentation.component.html',
  styleUrls: ['./staff-augmentation.component.scss']
})
export class StaffAugmentationComponent {


  constructor(public router: Router) { }

  gonextContact() {
    this.router.navigate(['/', 'Contactus']);
  }
}
