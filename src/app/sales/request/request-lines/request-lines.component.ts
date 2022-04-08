import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Request } from '../../request/request.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request!: Request

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private reqsline: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  delete(): void {
    
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
