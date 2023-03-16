import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  signUp(user) {
    return this.http.post<any>(this.URL + '/empleado/signup', user);
  }
}
