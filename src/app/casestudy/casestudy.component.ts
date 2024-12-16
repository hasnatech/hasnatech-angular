import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss']
})
export class CasestudyComponent implements OnInit {

  caseStudies: any[] = []

  constructor(public mainService: MainService, main: MainService, public seoService: SeoService, public apiService: ApiService) {
    // main.setMeta("Case Study", 'description', 'assets/image/case-study.png');
    this.seoService.setMetaTags(
      'Case Studies - Real-World Solutions by HasnaTech', // Title
      "Explore HasnaTech's case studies showcasing innovative solutions and success stories. Discover how we've transformed challenges into impactful results.", // Description
      'case studies, success stories, real-world solutions, HasnaTech projects, innovative solutions', // Keywords
      'https://hasnatech.com/assets/images/case-studies-banner.jpg', // Image URL
      'https://hasnatech.com/casestudy' // Page URL
    );
  }

  ngOnInit() {
    this.getCasestudy();
  }

  getLink(item: any) {
    let link = "/casestudy/" + item.title.toLowerCase().split(" ").join("-") + "/" + item.id;
    // console.log("{ path: '" + link + "', component: DetailComponent},")
    return link;
  }


  getCasestudy() {
    this.apiService.getData('casestudies').subscribe({
      next: (data: any) => {
        this.caseStudies = data.data;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


}
