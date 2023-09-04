import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
<<<<<<< HEAD
import { Title } from '@angular/platform-browser';
import { MainService } from '../service/main.service';
=======
import { Router } from '@angular/router';

>>>>>>> ea675d83f941c2b1b70b0a5cd3312c99ab601f75
@Component({
  selector: 'app-staff-augmentation1',
  templateUrl: './staff-augmentation1.component.html',
  styleUrls: ['./staff-augmentation1.component.scss']
})
export class StaffAugmentation1Component {
<<<<<<< HEAD
  constructor(public service:ServiceService, main:MainService){
    main.setMeta("Staff Augmentation", 'description', 'assets/image/staff-augmentation.png');
=======
  constructor(public service:ServiceService,public router: Router){}


  gonextContact() {
    this.router.navigate(['/', 'Contactus']);
>>>>>>> ea675d83f941c2b1b70b0a5cd3312c99ab601f75
  }

}
