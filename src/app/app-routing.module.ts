import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StaffAugmentationComponent } from './staff-augmentation/staff-augmentation.component';
import { StaffAugmentation1Component } from './staff-augmentation1/staff-augmentation1.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'StaffAugmentation',component:StaffAugmentationComponent},
  {path:'StaffAugmentation1',component:StaffAugmentation1Component}
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
