import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  // url = 'http://127.0.0.1:8000/api/';
  url = 'https://website.hasnatech.tech/api/';

  token = "";

  post(endpoint: string, data: any) {
    return this.httpClient.post(this.url + endpoint, data);
  }

  getData(endpoint: string) {
    return this.httpClient.get(this.url + endpoint);
  }

  getDataBySlug(type: string, slug: string ) {
    return this.httpClient.get(`${this.url}${type}/${slug}`);
  }
}
