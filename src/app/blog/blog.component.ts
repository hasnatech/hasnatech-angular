import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ApiService } from '../service/api.service';

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
    public mainService: MainService
  ) {
    this.mainService.setMeta("Blog", 'description', 'assets/image/blog.png');
  }

  ngOnInit(): void {
    this.getBlogs(); // Load initial page
  }

  // Fetch blogs with pagination
  getBlogs(pageUrl: string = 'blogs') {
    this.apiService.getBlog(pageUrl).subscribe({
      next: (data: any) => {
        this.blogs = data.data;
        this.pagination = {
          current_page: data.current_page,
          prev_page_url: data.prev_page_url,
          next_page_url: data.next_page_url,
          links: data.links,
        };
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
      this.getBlogs(relativeUrl);
    }
  }

}
