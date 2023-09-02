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
  constructor(public service: MainService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => { 
      let type = params['type'];

      if (type == 'casestudy') {
        this.data = this.service.getCaseStudy(params['id']);
      }else if(type == 'blog') {
        this.data = this.service.getBlog(params['id']);
      }
    });
  }
}
