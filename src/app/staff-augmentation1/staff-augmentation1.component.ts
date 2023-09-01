import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-staff-augmentation1',
  templateUrl: './staff-augmentation1.component.html',
  styleUrls: ['./staff-augmentation1.component.scss']
})
export class StaffAugmentation1Component {
  constructor(public service:ServiceService){}

}
