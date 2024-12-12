import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../service/api.service';

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
  blog: any[] = []; // Initialize as an array to prevent issues
  relatedBlog: any[] = [];

  constructor(
    public apiService: ApiService,
    public service: MainService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      let type = this.type;

      if (type === 'casestudy') {
        this.data = this.service.getCaseStudy(params['id']);
        if (this.data && this.data.content) {
          this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
        }
        this.list = "<h3 class='text-white mb-3'>Recent Casestudy</h3><ul>";
        this.service.casestudies.slice(0, 11).forEach((casestudy) => {
          if (this.data.id !== casestudy.id) {
            this.list += `<li class='mb-3'>
                            <a class='text-white' href='${this.service.getLink(casestudy, 'casestudy')}'>
                              ${casestudy.title}
                            </a>
                          </li>`;
          }
        });
        this.list += '</ul>';
      } else if (type === 'blog') {
        const slug = this.route.snapshot.paramMap.get('slug');

        if (slug) {
          // Fetching the blog data based on the slug
          this.apiService.getBlogBySlug(slug).subscribe({
            next: (response: any) => {
              if (response.related && response.blog) {
                this.blog = Array.isArray(response.blog) ? response.blog : [response.blog];
                this.relatedBlog = Array.isArray(response.related) ? response.related : [response.related];
                // console.log("Related Blogs data fetched", this.relatedBlog);
                // this.relatedBlog.forEach(related => {
                //   console.log(related.title);

                // })

                this.data = this.getBlog(slug);

                if (this.data && this.data.content) {
                  this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
                }

                // Update the list of recent blogs
                this.list = "<h3 class='text-white mb-3'>Recent Blogs</h3><ul>";
                this.relatedBlog.forEach((relatedBlogItem) => {
                  if (relatedBlogItem.slug !== slug) {
                    this.list += `<li class='mb-3'>
                                    <a class='text-white' href='${this.service.getLink(relatedBlogItem, 'blog')}'>
                                      ${relatedBlogItem.title}
                                    </a>
                                  </li>`;
                  }
                });
                this.list += '</ul>';
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

  getBlog(slug: string) {
    return this.blog.find((f) => f.slug === slug);
  }

  // ngOnDestroy() {
  //   if (this.routeSub) {
  //     this.routeSub.unsubscribe();
  //   }
  // }

}
