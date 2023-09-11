import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  routeSub: any;
  data: any;
  list: any;
  constructor(public service: MainService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      let type = params['type'];

      if (type == 'casestudy') {
        this.data = this.service.getCaseStudy(params['id']);

        this.data = this.service.getBlog(params['id']);
        this.list = "<h3 class='text-white mb-3'>Recent Casestudy</h3><ul>"
        this.service.casestudies.slice(0, 11).forEach(casestudy => {
          if (this.data.id != casestudy.id) {
            this.list += "<li class='mb-3'><a class='text-white' href='" + this.service.getLink(casestudy, 'casestudy') + "'>" + casestudy.title + "</a></li>"
          }
        });
        this.list += "</ul>"

      } else if (type == 'blog') {

        this.data = this.service.getBlog(params['id']);
        this.list = "<h3 class='text-white mb-3'>Recent Blogs</h3><ul>"
        this.service.blogs.slice(0, 11).forEach(blog => {
          if (this.data.id != blog.id) {
            this.list += "<li class='mb-3'><a class='text-white' href='" + this.service.getLink(blog, 'blog') + "'>" + blog.title + "</a></li>"
          }
        });
        this.list += "</ul>"
      }
    });
  }
}
