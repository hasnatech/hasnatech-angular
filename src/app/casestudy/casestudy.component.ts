import { Component } from '@angular/core';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-casestudy',
  templateUrl: './casestudy.component.html',
  styleUrls: ['./casestudy.component.scss']
})
export class CasestudyComponent {
  constructor(public service: MainService) { }

  getLink(item: any) {
    return "/casestudy/" + item.title.toLowerCase().split(" ").join("-") + "/" + item.id;
  }
}
