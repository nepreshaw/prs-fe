import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginComponent } from './sales/user/user-login/user-login.component';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient) { }
  
  user: any;

  loggedUser() {
    return this.user;
  }
  


  
  

}
