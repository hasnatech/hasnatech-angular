import { Component } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss']
})
export class CasestudyComponent {
  constructor(public service: MainService, main: MainService) {
    main.setMeta("Case Study", 'description', 'assets/image/case-study.png');
  }

  getLink(item: any) {
    let link = "/casestudy/" + item.title.toLowerCase().split(" ").join("-") + "/" + item.id;
    // console.log("{ path: '" + link + "', component: DetailComponent},")
    return link;
  }
}
