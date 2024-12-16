import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { ApiService } from '../service/api.service';
import { SeoService } from '../service/seo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: any[] = [];
  pagination: any = {};
  imgPreText = 'https://website.hasnatech.tech/storage/';
  currentPage: number = 1; // Store the current page number

  constructor(
    private apiService: ApiService,
    public mainService: MainService,
    public seoService: SeoService,
    private activatedRoute: ActivatedRoute, // Inject ActivatedRoute to access route params
    private router: Router // Inject Router to update URL when the page changes
  ) {
    // Set up meta tags for SEO
    this.seoService.setMetaTags(
      'HasnaTech Blog - Insights into Technology and Innovation',
      "Stay updated with the latest trends and insights in technology, web development, and AI.",
      'Technology blog, HasnaTech insights, AI trends, web development tips',
      'https://hasnatech.com/assets/images/blog-banner.jpg',
      'https://hasnatech.com/blog'
    );
  }

  ngOnInit(): void {
    // Get the current page from the route or default to 1
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['page'] || 1; // Set the current page from the URL or default to 1
      this.getBlogs(); // Load blogs for the current page
    });
  }

  // Fetch blogs with pagination
  getBlogs(page: number = this.currentPage) {
    const pageUrl = `blogs?page=${page}`; // Include page in the request URL

    this.apiService.getData(pageUrl).subscribe({
      next: (data: any) => {
        this.blogs = data.data;
        this.pagination = data.links;
        this.currentPage = page; // Update the current page number
      },
      error: (err) => {
        console.error('Error fetching blogs', err);
      }
    });
  }

  // Handle page change by updating the URL
  changePage(page: number) {
    // Update the URL with the new page number
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { page: page },
      queryParamsHandling: 'merge', // Keep existing query params, only update 'page'
    });
  }
}