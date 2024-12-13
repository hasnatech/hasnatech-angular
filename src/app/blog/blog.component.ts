import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ApiService } from '../service/api.service';
import { SeoService } from '../service/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any[] = [];
  pagination: any = {};
  imgPreText = 'https://website.hasnatech.tech/storage/';

  constructor(
    private apiService: ApiService,
    public mainService: MainService,
    public seoService: SeoService
  ) {
    // this.mainService.setMeta("Blog", 'description', 'assets/image/blog.png');
    this.seoService.setMetaTags(
      'HasnaTech Blog - Insights into Technology and Innovation', // Title
      "Stay updated with the latest trends and insights in technology, web development, and AI.", // Description
      'Technology blog, HasnaTech insights, AI trends, web development tips', // Keywords
      'https://hasnatech.com/assets/images/blog-banner.jpg', // Image URL
      'https://hasnatech.com/blog' // Page URL
    );
  }

  ngOnInit(): void {
    let page = 1;
    this.getBlogs(page); // Load initial page
  }

  // Fetch blogs with pagination
  getBlogs(page=1, pageUrl: string = 'blogs') {
    
    this.apiService.getBlog(pageUrl+"?page="+page).subscribe({
      next: (data: any) => {
        this.blogs = data.data;
        // this.pagination = {
        //   current_page: data.current_page,
        //   prev_page_url: data.prev_page_url,
        //   next_page_url: data.next_page_url,
        //   links: data.links,
        // };
        this.pagination = data.links;
      },
      error: (err) => {
        console.error('Error fetching blogs', err);
      }
    });
  }

  // Handle page change
  changePage(url: string | null) {
    if (url) {
      const relativeUrl = url.replace(this.apiService.url, ''); // Convert to relative URL
      // this.getBlogs(relativeUrl);
    }
  }

}
