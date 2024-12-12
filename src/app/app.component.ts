import { Component } from '@angular/core';
import { MainService } from './service/main.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  constructor(private router: Router, private mainService: MainService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update meta tags based on route data
        this.mainService.setMeta(
          'Home Page',
          'Welcome to Hasna Technology. Explore our amazing services.',
          'assets/images/hasna_tech_wh.png'
        );
      }
    });
  }

  // constructor(private mainService: MainService) {}

  // ngOnInit(): void {
  //   // Set dynamic meta tags
  //   this.mainService.setMeta(
  //     'Home Page',
  //     'Welcome to Hasna Technology. Explore our amazing services.',
  //     'assets/homepage-image.jpg'
  //   );
  // }

}
