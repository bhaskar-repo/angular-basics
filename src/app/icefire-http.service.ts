import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//This class is wriiten to fetch data from given API
@Injectable()
export class IcefireHttpService {

  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {
  }

  public getAllBooks(): any {
    let allBooks = this._http.get(this.baseUrl + '/books');
    return allBooks;
  }

  public getAllCharacters(): any {
    let allCharacters = this._http.get(this.baseUrl + '/characters');
    return allCharacters;
  }

  public getAllHouses(): any {
    let allHouses = this._http.get(this.baseUrl + '/houses');
    return allHouses;
  }

  public getDetailsByParamId(viewParam,viewId): any {
    let detail = this._http.get(this.baseUrl + '/' + viewParam + '/' + viewId);
    return detail;
  }

}
