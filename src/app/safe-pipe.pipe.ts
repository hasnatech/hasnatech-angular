import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safePipe'
})
export class SafePipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  constructor(private sanitizer: DomSanitizer) {}
  transform(url: any, args?: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
