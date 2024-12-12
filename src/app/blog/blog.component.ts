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
  imgPreText = 'https://website.hasnatech.tech/storage/' 

  constructor(
    private apiService: ApiService,
    public mainService: MainService
  ) {
    this.mainService.setMeta("Blog", 'description', 'assets/image/blog.png');
  }

  ngOnInit(): void {
    this.getBlogs();
    console.log(this.blogs);
    
  }

  getBlogs() {
    this.apiService.get('blogs').subscribe({
      next: (data: any) => {
        this.blogs = data.data;
      },
      error(err) {
        console.error('Error fetching blogs', err);
      }
    })
  }

}
