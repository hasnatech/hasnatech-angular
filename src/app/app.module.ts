import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountUpDirective } from './count-up.directive';
import { StaffAugmentationComponent } from './staff-augmentation/staff-augmentation.component';
import { StaffAugmentation1Component } from './staff-augmentation1/staff-augmentation1.component';
import { CustomDevelopmentComponent } from './custom-development/custom-development.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PricingComponent } from './pricing/pricing.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { ActionLinkComponent } from './action-link/action-link.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { BlogComponent } from './blog/blog.component';
import { DetailComponent } from './detail/detail.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScormComponent } from './scorm/scorm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountUpDirective,
    StaffAugmentationComponent,
    StaffAugmentation1Component,
    CustomDevelopmentComponent,
    ContactUsComponent,
    AboutUsComponent,
    PricingComponent,
    SafePipePipe,
    ActionLinkComponent,
    CasestudyComponent,
    BlogComponent,
    DetailComponent,
    ScormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
