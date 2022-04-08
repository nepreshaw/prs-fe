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
    this.reqlinesvc.change(this.reqlines).subscribe({
      next: (res) => {
        console.debug("requestline updated");
        this.router.navigateByUrl("/request/list")
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  ngOnInit(): void {
    //this.reqsvc.list

    
  }

}
