import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Login } from './login';
import { Bike } from './../listings/bike';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs';

@Injectable()
export class UserService {

  constructor( private _http: Http) { }

  register(newUser: User) {
    return this._http.post('/register', newUser).map(data => data.json()).toPromise();
  }

  login(newlogin: Login) {
    return this._http.post('/login', newlogin).map(data => data.json()).toPromise();
  }

  addbike(bike: Bike) {
    return this._http.post('/addbike', bike).map(data => data.json()).toPromise();

  }
  getAllBikes() {
    return this._http.get('/getAllBikes').map(data => data.json()).toPromise();
  }
  getAllMyBikes() {
    return this._http.get('/getAllMyBikes').map(data => data.json()).toPromise();
  }

  update(mybike: Bike) {
    return this._http.post('/update', mybike).map(data => data.json()).toPromise();
  }

  delete(id) {
    return this._http.post('/delete', {id: id}).map(data => data.json()).toPromise();
  }


}
