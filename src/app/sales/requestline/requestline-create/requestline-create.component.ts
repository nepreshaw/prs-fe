import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.class';
import { RequestLine } from '../requestline.class';
import { Request } from '../../request/request.class';
import { RequestService } from '../../request/request.service';
import { ProductService } from '../../product/product.service';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';


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
    private router: Router,
    private sys: SystemService,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.reqlinesvc.create(this.reqlines).subscribe({
      next: (res) => {
        console.debug("Requestline added", res);
        this.router.navigateByUrl(`/request/lines/${this.reqlines.requestId}`);
      },
      error: (err) => {
        console.debug(err);
      }
    });

  }

  ngOnInit(): void {
    this.reqlines.requestId = +this.route.snapshot.params["requestid"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.product = res;
      },
      error: (err) => console.error(err)
    });
  }

}
