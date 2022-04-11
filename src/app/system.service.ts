import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginComponent } from './sales/user/user-login/user-login.component';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient,
    private router: Router) { }
  
  user: any = null;

  chkLogin() {
    if(this.user === null){
      this.router.navigateByUrl("/login")
    }
  }

  loggedUser() {
    return this.user;
  }
  


  
  

}
