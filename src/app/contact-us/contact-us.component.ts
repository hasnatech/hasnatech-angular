import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafePipePipe } from '../safe-pipe.pipe';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  employeeDetails: FormGroup;

  constructor(private _details: FormBuilder) {

    this.employeeDetails = this._details.group({

      Name: ['', Validators.required],

      Subject: ['', Validators.required],

      Email: ['', Validators.required],

      Organization_Name: ['', Validators.required],

      Your_Requirement: ['', Validators.required],

    })

  }

  positionMap = {
    street: "Coral Merchant Street",
    num: "178",
    city: "Chennai"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

}
