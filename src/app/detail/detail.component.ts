import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { ApiService } from '../service/api.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  routeSub: any;
  data: any;
  list: any = '';
  @Input() type = '';
  arrayData: any[] = [];
  related: any[] = [];
  dataSeo: any;
  pageType: any;

  image_url = 'https://website.hasnatech.tech/storage/';

  constructor(
    public apiService: ApiService,
    public mainService: MainService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public seoService: SeoService
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      let type = this.type;
      const slug = this.route.snapshot.paramMap.get('slug');

      if (type === 'casestudy') {


        if (slug) {
          this.pageType = 'casestudy';
          this.dataSeo = {
            title: `Embracing the Future: Top eLearning Trends for ${this.mainService.year}`,
            description: `Discover the future of eLearning with top trends shaping education and training in ${this.mainService.year}`,
            keywords: 'eLearning trends, online education, training solutions, HasnaTech',
            image: 'https://hasnatech.com/assets/images/blog-elearning-trends.jpg',
            url: `https://hasnatech.com/casestudy/${slug}`,
          };

          this.getMetaTags();

          this.apiService.getDataBySlug(this.pageType, slug).subscribe({
            next: (response: any) => {
              if (response.related && response.casestudy) {
                this.arrayData = Array.isArray(response.casestudy) ? response.casestudy : [response.casestudy]
                this.related = Array.isArray(response.realted) ? [response.realted] : response.related
                // console.log("Case study related content:", this.related);
                this.data = this.getFoundedData(slug);
                if (this.data && this.data.content) {
                  this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
                }
              }
            },
            error: (err) => {
              console.error('Error fetching blog:', err);
            }
          })
        }


      } else if (type === 'blog') {
        this.dataSeo = {
          title: `Embracing the Future: Top eLearning Trends for ${this.mainService.year}`,
          description: `Discover the future of eLearning with top trends shaping education and training in ${this.mainService.year}`,
          keywords: 'eLearning trends, online education, training solutions, HasnaTech',
          image: 'https://hasnatech.com/assets/images/blog-elearning-trends.jpg',
          url: `https://hasnatech.com/blog/${slug}`,
        };

        this.getMetaTags();

        if (slug) {
          // Fetching the blog data based on the slug
          this.pageType = 'blog';
          this.apiService.getDataBySlug(this.pageType, slug).subscribe({
            next: (response: any) => {
              if (response.related && response.blog) {
                this.arrayData = Array.isArray(response.blog) ? response.blog : [response.blog];
                this.related = Array.isArray(response.related) ? response.related : [response.related];
                this.data = this.getFoundedData(slug);
                if (this.data && this.data.content) {
                  this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
                }
              }
            },
            error: (err) => {
              console.error('Error fetching blog:', err);
            },
          });
        }
      }
    });
  }

  getFoundedData(slug: string) {
    return this.arrayData.find((f) => f.slug === slug);
  }


  getMetaTags() {
    // Set SEO meta tags dynamically
    if (this.dataSeo)
      this.seoService.setMetaTags(
        this.dataSeo.title,
        this.dataSeo.description,
        this.dataSeo.keywords,
        this.dataSeo.image,
        this.dataSeo.url
      );
  }

}
