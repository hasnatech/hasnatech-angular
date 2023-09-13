import { Component } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(public service: MainService,main:MainService) {
    main.setMeta("Blog", 'description', 'assets/image/blog.png');
   }

}
