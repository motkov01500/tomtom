import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TomService {
  constructor(private http: HttpClient) {}

  public getAll(userInput: string): Observable<any> {
    // const url: string = 'https://api.tomtom.com/search/2/autocomplete/';
    const url: string = 'https://api.tomtom.com/search/2/geocode/';
    const key: string = 'AtqjjGJpGuNxwWOxBMYlDM5JYZ7tqn3r';
    // const key: string = 'sbb1ZrQiD2RdtyXyrAhFXen4G2d6N41J';

    return this.http.get(url + userInput + `.json?key=${key}&language=en-US`);
  }
}
