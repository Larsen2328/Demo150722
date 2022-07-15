import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTitre() {
    return this.http.get(this.url, {responseType: 'text'});
  }

  getPersonnes() {
    return this.http.get(this.url + '/personnes');
  }

}
