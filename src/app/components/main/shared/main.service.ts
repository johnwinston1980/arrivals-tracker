import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url = 'https://popular-hound-47.localtunnel.me/'

  constructor(private http: HttpClient) {

   }

   public getFlights() {
    return this.http.get(this.url);
  }

}