import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request.class';
import { RequestLine } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  request!: Request[];
  reqlines!: RequestLine[];
  user!: User[];
  

  constructor(
    private reqsvc: RequestService,
    private usersvc: UserService,
    private reqlsvc: RequestlineService,
    private sys: SystemService,
   
  ) { }

 



  ngOnInit(): void {
    this.sys.chkLogin();
    this.reqsvc.requests(this.sys.user.id).subscribe({
      next: (res) => {
        this.request = res;
        console.debug("Requests", res);
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
  }

  //review looks like the request lines