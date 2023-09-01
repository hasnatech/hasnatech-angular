import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('counter') 
  counter: any;
  param1 = 0;
  param2 = 0;
  param3 = 0;
  param4 = 0;

  duration = 3000;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll() {
    var rect = this.counter.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; 
    var elemBottom = rect.bottom;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param1 = 600:null;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ?  this.param2 = 9000:null;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ?  this.param3 = 10:null;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ?  this.param4 = 216:null;
  }

constructor(public service:ServiceService){
  
}
// ngOnInit(): void {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     margin: 10,
//     loop: false,
//     nav: true,
//     dots: true,
//   });
// }

count:number = 0;
countStop:any = setInterval(() =>{
  this.count = this.count + 1;
  if(this.count == 600){
    clearInterval(this.countStop);
  }
},.0001);

count1:number = 0;
countStop1:any = setInterval(() =>{
  this.count1++;
  if(this.count1 == 9000){
    clearInterval(this.countStop1);
  }
},.000001);

count2:number = 0;
countStop2:any = setInterval(() =>{
  this.count2++;
  if(this.count2 == 10){
    clearInterval(this.countStop2);
  }
},1000);

count3:number = 0;
countStop3:any = setInterval(() =>{
  this.count3++;
  if(this.count3 == 216){
    clearInterval(this.countStop3);
    
  }
},.0001 );


}
