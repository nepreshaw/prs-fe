import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
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
  get username(){return this.sys.user.username;}

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService,
    private router: Router,
    private sys: SystemService
  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    console.debug(this.request);
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
      this.request.userId = this.sys.user.id;
  }

}
