import { State } from './../../models/state';
import { ApiItem } from './../../models/apiItem';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateDataService {

  constructor(private httpClient: HttpClient) { }

  public fetchAllData(): Observable<ApiItem[]> {
    return this.httpClient.get(environment.apiUrl).pipe(map((fullData: Array<any>) => {
      return fullData.filter((item) => {
        return item.period === environment.year;
      }).map((item) => {
        return new ApiItem(item);
      });
    }));
  }

  public getAllStates(): Observable<State[]> {
    return this.fetchAllData().pipe(map((itemList) => {
      return itemList.map((item: ApiItem) => {
        return item.state;
      });
    }));
  }

  public getState(code: string): Observable<ApiItem> {
    return this.fetchAllData().pipe(map((itemList) => {
      return itemList.find((item) => {
        return item.state.code === code;
      });
    }));
  }
}
