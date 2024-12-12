import { Component, OnInit } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    // Set dynamic meta tags
    this.mainService.setMeta(
      'Home Page',
      'Welcome to Hasna Technology. Explore our amazing services.',
      'assets/images/src/assets/images/hasna_tech_wh.png'
    );
  }

}
