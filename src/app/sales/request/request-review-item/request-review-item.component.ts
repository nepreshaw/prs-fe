import { Component, OnInit } from '@angular/core';
import { Request } from '../../request/request.class';
import { ActivatedRoute, Router } from '@angular/router';
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
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  showReject(): void {

  }

  approve(): void {
    this.reqsvc.approve(this.req).subscribe({
      next: (res) => {
        console.debug("approved", res)
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  reject(): void {
    this.reqsvc.reject(this.req).subscribe({
      next: (res) => {
        console.debug("rejected", res)
        this.refresh();
      },
      error: (err) => {
        console.error(err)
      }
    });
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
    let id = this.route.snapshot.params["requestid"]
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
