import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Title } from '@angular/platform-browser';
import { MainService } from '../service/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-augmentation1',
  templateUrl: './staff-augmentation1.component.html',
  styleUrls: ['./staff-augmentation1.component.scss']
})
export class StaffAugmentation1Component {
  constructor(public service: ServiceService, main: MainService, public router: Router) {
    main.setMeta("Staff Augmentation", 'description', 'assets/image/staff-augmentation.png');
  }


  gonextContact() {
    this.router.navigate(['/', 'Contactus']);
  }

}
