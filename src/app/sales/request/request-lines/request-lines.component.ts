import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request.class';
import { RequestLine } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { User } from '../../user/user.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request
  user!: User

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private reqsline: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("reviewed", res)
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

    // submit(): void {
  //   this.usersvc.login(this.username, this.password).subscribe({
  //     next: (res) => {
  //       console.log("Login succesful");
  //       this.sysserv.user = res;
  //       this.router.navigateByUrl("/request/list")
  //     },
  //     error: (err) => {
  //       console.error("login unsuccesful")
  //     }
  //   });
  // }

  delete(reqline: RequestLine): void {
    this.reqsline.remove(reqline.id).subscribe({
      next: (res) => {
        console.log(res);
        this.refresh();
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  edit(reqline: RequestLine): void {
    this.router.navigateByUrl(`/requestline/edit/${reqline.id}`)
  }
  
  refresh(): void {
    let id = this.route.snapshot.params["id"]
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res;
      }
    });
  }

  ngOnInit(): void {
   this.refresh();

  }

}
