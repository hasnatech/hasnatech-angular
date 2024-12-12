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
  list: any;
  @Input() type = '';
  blog: any;
  relatedBlog: any[] = [];

  constructor(public apiService: ApiService, public service: MainService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      // let type = params['type'];
      let type = this.type;

      if (type == 'casestudy') {
        this.data = this.service.getCaseStudy(params['id']);
        this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
        this.list = "<h3 class='text-white mb-3'>Recent Casestudy</h3><ul>"
        this.service.casestudies.slice(0, 11).forEach(casestudy => {
          if (this.data.id != casestudy.id) {
            this.list += "<li class='mb-3'><a class='text-white' href='" + this.service.getLink(casestudy, 'casestudy') + "'>" + casestudy.title + "</a></li>"
          }
        });
        this.list += "</ul>"

      } else if (type == 'blog') {


        const slug = this.route.snapshot.paramMap.get('slug');

        if (slug) {
          // Initialize this.blog as an empty array if it's not set.
          this.blog = [];

          // Fetching the blog data based on the slug
          this.apiService.getBlogBySlug(slug).subscribe({
            next: (response: any) => {
              // // Make sure the response contains an array of blogs or the specific blog object
              // if (Array.isArray(response.blog)) {
              //   this.blog = response.blog; // Assign the array of blogs
              //   console.log(this.blog);

              // } else {
              //   // If it's not an array, you can assign it as an array with one blog object
              //   this.blog = [response.blog];
              // }

              if (response) {
                this.blog = response.blog;
                // console.log('Blog data fetched:', this.blog);
                
              } else {
                // If it's not an array, you can assign it as an array with one blog object
                this.blog = [response.blog];
              }

              console.log('Blog data fetched:', this.blog);

              this.data = this.getBlog(slug);
              console.log('Data:', this.data);
              this.data.content = this.sanitizer.bypassSecurityTrustHtml(this.data.content);
              this.list = "<h3 class='text-white mb-3'>Recent Blogs</h3><ul>"
              // this.blog.slice(0, 11).forEach((b: { slug: any, title: string }) => {
              //   if (this.data.slug !== b.slug) {
              //     this.list += "<li class='mb-3'><a class='text-white' href='" + this.service.getLink(b, 'blog') + "'>" + b.title + "</a></li>"
              //   }
              // });
              this.list += "</ul>"


              // this.data = this.service.getBlog(params['id']);
              // this.list = "<h3 class='text-white mb-3'>Recent Blogs</h3><ul>"
              // this.service.blogs.slice(0, 11).forEach(blog => {
              //   if (this.data.id != blog.id) {
              //     this.list += "<li class='mb-3'><a class='text-white' href='" + this.service.getLink(blog, 'blog') + "'>" + blog.title + "</a></li>"
              //   }
              // });
              // this.list += "</ul>"
            },
            error: (err) => {
              console.error('Error fetching blog:', err);
            }
          });
        }
      }
    });
  }


  getBlog(slug: string) {
    // Ensure you're returning the first blog object matching the slug
    return this.blog.find((f: { slug: string }) => f.slug === slug);
  }

}
