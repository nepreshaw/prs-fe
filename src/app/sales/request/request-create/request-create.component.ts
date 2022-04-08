import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../../request/request.class';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  users!: User[];

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request added", res);
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.debug(err);
      }
    })
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      }
    });
  }

}
