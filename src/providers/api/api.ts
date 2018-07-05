import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  public token: string = '';
  public url: string;
  constructor(private _http: Http) {
  }

  public get(url) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.token}`);
    let options = new RequestOptions({ headers: headers });
    return this._http.get(url, options)
      .map(response => response.json());
  }

  public post(url: string, data: any) {
    return this._http.post(url, data)
      .map(response => response.json());
  }

}
