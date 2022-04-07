import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private usersvc: UserService,
    private router: Router,
    private sysserv: SystemService
  ) { }
  
  submit(): void {
    this.usersvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log("Login succesful");
        this.sysserv.user = res;
        this.router.navigateByUrl("/user/list")
      },
      error: (err) => {
        console.error("login unsuccesful")
      }
    });
  }

  ngOnInit(): void {
  }

}
