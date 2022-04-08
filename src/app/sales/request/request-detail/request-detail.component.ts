import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.class';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request!: Request
  user!: User
  showVerifyButton: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    remove(): void {
      this.showVerifyButton = !this.showVerifyButton
    }

    verifyRemove(): void {
      this.showVerifyButton = false;
      this.reqsvc.remove(this.request.id).subscribe({
        next: (res) => {
          console.debug("request deleted", res);
          this.router.navigateByUrl("/request/list");
        },
        error: (err) => {
          console.error(err)
        }
      });
    }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
