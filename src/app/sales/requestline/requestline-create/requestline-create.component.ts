import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.class';
import { RequestLine } from '../requestline.class';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { ProductService } from '../../product/product.service';
import { RequestlineService } from '../requestline.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  reqlines: RequestLine = new RequestLine();
  request!: Request[];
  product!: Product[];

  constructor(
    private reqsvc: RequestService,
    private prodsvc: ProductService,
    private reqlinesvc: RequestlineService,
    private router: Router
  ) { }

  save(): void {
    this.reqlines.productId = +this.reqlines.productId;
    this.reqlines.requestId = +this.reqlines.requestId;
    this.reqlinesvc.create(this.reqlines).subscribe({
      next: (res) => {
        console.debug("Requestline added", res);
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.debug(err);
      }
    })

  }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.request = res;
      }
    });
  }

}
