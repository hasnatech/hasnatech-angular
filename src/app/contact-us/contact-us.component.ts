import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SafePipePipe } from '../safe-pipe.pipe';
import { MainService } from '../service/main.service';
import { ApiService } from '../service/api.service';
import { SeoService } from '../service/seo.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  employeeDetails: any;

  constructor(private fb: FormBuilder, main: MainService, public api: ApiService, public seoService: SeoService) {
    // main.setMeta("Contact Us", 'description', 'assets/image/contact-us.png');
    this.seoService.setMetaTags(
      'Contact HasnaTech - Let’s Build Your Next Project', // Title
      'Get in touch with HasnaTech for expert technology solutions tailored to your business.', // Description
      'contact HasnaTech, IT consulting, technology solutions', // Keywords
      'https://hasnatech.com/assets/images/contact-us-banner.jpg', // Image URL
      'https://hasnatech.com/contact-us' // Page URL
    );

    this.employeeDetails = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      org: ['', Validators.required],
      req: ['', Validators.required],
    });
  }

  // Inside your component class
  validationMessages = {
    name: {
      required: 'Name is required.',
    },
    subject: {
      required: 'Subject is required.',
    },
    org: {
      required: 'Organization Name is required.',
    },
    mobile: {
      required: 'Mobile number is required.',
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email format.',
    },
    req: {
      required: 'Your Requirement is required.',
    },
  };

  loading = false;
  errMsg = '';
  sucMsg = '';
  submit = false;
  formSubmitted = false;
  submitForm() {
    if (this.loading == false) {
      this.submit = true;
      if (this.employeeDetails.valid) {
        const formData = this.employeeDetails.value;
        this.loading = true;
        this.api.post('contact/create', formData).subscribe({
          next: (data: any) => {
            this.loading = false;
            console.log('Form data submitted successfully', data);
            if (data.success == true) {
              this.formSubmitted = true;
              this.sucMsg = 'Thanks for submiting your requirement. The team will contact you.';
            } else {
              this.errMsg = 'There is an error in submitting the form. You email support@hasnatech.com or try after sometime.';
            }
          },
          error: (error) => {
            this.loading = false;
            console.error('Error submitting form data', error);
            this.errMsg = 'There is an error in submitting the form. You email support@hasnatech.com or try after sometime.';
          }
        });
      } else {
        this.errMsg = 'Please fill in all required fields.';
      }
    }
  }
  positionMap = {
    street: "Eunos Ave 7, Singapore 409575",
    num: "122",
    city: "Singapore"
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;

}
