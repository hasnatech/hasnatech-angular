import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {


  constructor(private titleService: Title, private metaService: Meta) { }

  // Method to set meta tags dynamically
  setMetaTags(title: string, description: string, keywords: string, imageUrl: string, pageUrl: string): void {
    // Set the title dynamically
    // console.log("fullTitle",title);
    this.titleService.setTitle(title);

    // Set the description dynamically
    this.metaService.updateTag({
      name: 'description',
      content: description
    });

    // Set the keywords dynamically
    this.metaService.updateTag({
      name: 'keywords',
      content: keywords
    });

    // Set Open Graph meta tags for social media preview
    this.metaService.updateTag({
      property: 'og:title',
      content: title
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: description
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: imageUrl
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: pageUrl
    });

    // Twitter card meta tags for Twitter preview
    this.metaService.updateTag({
      name: 'twitter:title',
      content: title
    });
    this.metaService.updateTag({
      name: 'twitter:description',
      content: description
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content: imageUrl
    });
  }

}
