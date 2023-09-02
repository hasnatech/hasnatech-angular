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
import { CasestudyComponent } from './casestudy/casestudy.component';
import { BlogComponent } from './blog/blog.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'Header',component:HeaderComponent},
  {path:'service/learning-management-system',component:StaffAugmentationComponent},
  {path:'service/staff-augmentation',component:StaffAugmentation1Component},
  {path:'service/custom-development',component:CustomDevelopmentComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'pricing',component:PricingComponent},
  {path:'casestudy',component:CasestudyComponent},
  {path:'blog',component:BlogComponent},
  {path:':type/:title/:id',component:DetailComponent},
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
