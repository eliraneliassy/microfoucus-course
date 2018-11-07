import { db } from './../data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throttleTime, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  private _items: any[];

  constructor(private httpClient: HttpClient) {

  }

  getItems(page: number) {
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.httpClient.get<any>('https://api.fashbash.co/api/feed'
    , {params: params});
  }
}
