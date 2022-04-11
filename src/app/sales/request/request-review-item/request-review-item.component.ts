import { Component, OnInit } from '@angular/core';
import { RequestLine } from '../../requestline/requestline.class';
import { Request } from '../../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../../requestline/requestline.service';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

 
  req!: Request

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reqlsvc: RequestlineService,
    private reql: RequestLine,
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  approve(): void {

  }

  reject(): void {

  }

  // review(): void {
  //   this.router.navigateByUrl("/request/review/list")
  //   this.reqsvc.review(this.request).subscribe({
  //     next: (res) => {
  //       console.debug("reviewed", res)
  //       this.refresh();
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     }
  //   });
  // }

  refresh(): void {
    let id = this.route.snapshot.params["id"]
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.req = res;
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

}
