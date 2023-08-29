import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  gotobottom(){
    document.querySelector("#secondpage")?.scrollIntoView({behavior:"smooth",block:"start"});
      }
      gotobottom1(){
        document.querySelector("#thirdpage")?.scrollIntoView({behavior:"smooth",block:"start"});
          }
          gotobottom2(){
            document.querySelector("#fourthpage")?.scrollIntoView({behavior:"smooth",block:"start"});
              }
              gotobottom3(){
                document.querySelector("#fifthpage")?.scrollIntoView({behavior:"smooth",block:"start"});
                  }
                  gotobottom4(){
                    document.querySelector("#sixthpage")?.scrollIntoView({behavior:"smooth",block:"start"});
                      }
                      // gotobottom5(){
                      //   document.querySelector("#seventhpage")?.scrollIntoView({behavior:"smooth",block:"start"});
                      //     }
}

