import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StaffAugmentationComponent } from './staff-augmentation/staff-augmentation.component';
import { StaffAugmentation1Component } from './staff-augmentation1/staff-augmentation1.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PricingComponent } from './pricing/pricing.component';
const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Managementsystem',component:StaffAugmentationComponent},
  {path:'StaffAugmentation1',component:StaffAugmentation1Component},
  {path:'CustomDevelopment',component:CustomDevelopmentComponent},
  {path:'Aboutus',component:AboutUsComponent},
  {path:'Contactus',component:ContactUsComponent},
  {path:'Pricing',component:PricingComponent}
];

@NgModule({

  imports: [

    RouterModule.forRoot(routes, {

      useHash: true,

      scrollPositionRestoration: 'enabled',

    })],

   

  exports: [RouterModule]

 

})
export class AppRoutingModule { }
