import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { SeoService } from '../service/seo.service';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss']
})
export class CasestudyComponent implements OnInit {

  caseStudies: any[] = []
  pagination: any = {};
  imgPreText = 'https://website.hasnatech.tech/storage/';
  currentPage: number = 1; // Store the current page number

  constructor(
    public mainService: MainService,
    public seoService: SeoService,
    public apiService: ApiService,
    private activatedRoute: ActivatedRoute, // Inject ActivatedRoute to access route params
    private router: Router // Inject Router to update URL when the page changes
  ) {
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
    
        // Get the current page from the route or default to 1
        this.activatedRoute.queryParams.subscribe(params => {
          this.currentPage = params['page'] || 1; // Set the current page from the URL or default to 1
          this.getCasestudy(); // Load case study for the current page
        });
  }

  // getLink(item: any) {
  //   let link = "/casestudy/" + item.title.toLowerCase().split(" ").join("-") + "/" + item.id;
  //   // console.log("{ path: '" + link + "', component: DetailComponent},")
  //   return link;
  // }


  getCasestudy(page: number = this.currentPage) {
    const pageUrl = `casestudies?page=${page}`;
    this.apiService.getData(pageUrl).subscribe({
      next: (data: any) => {
        this.caseStudies = data.data;
        this.pagination = data.links;
        this.currentPage = page; // Update the current page number
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


  changePage(page:any) {
    // Update the URL with the new page number
    let number = page['url'].split("?page=")[1];
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: number },
      queryParamsHandling: 'merge', // Keep existing query params, only update 'page'
    });
  }


}
