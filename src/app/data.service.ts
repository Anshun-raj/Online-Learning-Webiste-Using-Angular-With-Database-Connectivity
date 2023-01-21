import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  _url="http://localhost:3000/add";
  constructor(private _http:HttpClient){}

  send(user:User)
  {
    return this._http.post<any>(this._url,user);
  }
}
