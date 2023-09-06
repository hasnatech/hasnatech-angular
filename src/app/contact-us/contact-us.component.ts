import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafePipePipe } from '../safe-pipe.pipe';
import { MainService } from '../service/main.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  employeeDetails: FormGroup;

  constructor(private _details: FormBuilder,main:MainService) {
    main.setMeta("Contact Us", 'description', 'assets/image/contact-us.png');
    this.employeeDetails = this._details.group({

      Name: ['', Validators.required],

      Subject: ['', Validators.required],

      Email: ['', Validators.required],

      Organization_Name: ['', Validators.required],

      Your_Requirement: ['', Validators.required],

    })

  }

  positionMap = {
    street: "Eunos Ave 7, Singapore 409575",
    num: "122",
    city: "Singapore"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

}
