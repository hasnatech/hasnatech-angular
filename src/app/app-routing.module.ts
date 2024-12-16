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
import { ScormComponent } from './scorm/scorm.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CasestudyDetailComponent } from './casestudy-detail/casestudy-detail.component';
import { DataPolicyComponent } from './data-policy/data-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { GamificationComponent } from './gamification/gamification.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { LanguageTranslationComponent } from './language-translation/language-translation.component';
import { VideoCreationComponent } from './video-creation/video-creation.component';
import { AiServiceComponent } from './ai-service/ai-service.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'service/web-development', component: WebDevelopmentComponent },
  { path: 'service/video-creation', component: VideoCreationComponent },
  { path: 'service/ai-service', component: AiServiceComponent },
  { path: 'service/language-translation', component: LanguageTranslationComponent },
  { path: 'service/learning-management-system', component: StaffAugmentationComponent },
  { path: 'service/staff-augmentation', component: StaffAugmentation1Component },
  { path: 'service/learning-development', component: CustomDevelopmentComponent },
  { path: 'service/gamification', component: GamificationComponent },
  { path: 'service/scorm', component: ScormComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'pricing', component: PricingComponent },

  { path: 'casestudy', component: CasestudyComponent },
  { path: 'casestudy/:slug', component: CasestudyDetailComponent },

  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  
  { path: 'blog/:title/:id', component: BlogDetailComponent },
  { path: 'casestudy/:title/:id', component: CasestudyDetailComponent },
  { path: ':type/:title/:id', component: DetailComponent },
  { path: 'blog/embracing-the-future--top-elearning-trends-for-2023/1', component: BlogDetailComponent },
  { path: 'blog/unlocking-the-power-of-learning-management-systems--lms-/2', component: BlogDetailComponent },
  { path: 'blog/beyond-the-lms--the-rise-of-learning-experience-platforms--lxp-/3', component: BlogDetailComponent },
  { path: 'blog/adaptive-learning--tailoring-education-for-individual-success/4', component: BlogDetailComponent },
  { path: 'blog/gamification--elevating-engagement-and-learning-outcomes/5', component: BlogDetailComponent },
  { path: 'blog/mobile-learning--empowering-on-the-go-education/6', component: BlogDetailComponent },
  { path: 'casestudy/transitioning-from-adobe-flash-to-html5/1', component: CasestudyDetailComponent },
  { path: 'casestudy/rapid-video-development:-transforming-recruitment-training/2', component: CasestudyDetailComponent },
  { path: 'casestudy/a-cooling-challenge-game/3', component: CasestudyDetailComponent },
  { path: 'casestudy/transforming-supply-chain-training-with-gamification/4', component: CasestudyDetailComponent },
  { path: 'policy/data', component: DataPolicyComponent },
  { path: 'policy/cookies', component: CookiesPolicyComponent },

];

@NgModule({

  imports: [

    RouterModule.forRoot(routes, {
      // useHash: true,
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
