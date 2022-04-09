import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.class';
import { RequestLine } from '../requestline.class';
import { Request } from '../../request/request.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  reqlines!: RequestLine
  product!: Product[]
  request!: Request[]

  constructor(
    private reqlinesvc: RequestlineService,
    private prodsvc: ProductService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqlines.productId = this.reqlines.productId;
    this.reqlinesvc.change(this.reqlines).subscribe({
      next: (res) => {
        console.debug("rl changed", res)
        this.router.navigateByUrl(`/request/lines/${this.reqlines.requestId}`);
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = +this.route.snapshot.params["id"];
    this.reqlinesvc.get(id).subscribe({
      next: (res) => {
        console.debug("RequestLines:", res);
        this.reqlines = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
