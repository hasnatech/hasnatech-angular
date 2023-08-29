import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountUpDirective } from './count-up.directive';
import { StaffAugmentationComponent } from './staff-augmentation/staff-augmentation.component';
import { StaffAugmentation1Component } from './staff-augmentation1/staff-augmentation1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountUpDirective,
    StaffAugmentationComponent,
    StaffAugmentation1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
