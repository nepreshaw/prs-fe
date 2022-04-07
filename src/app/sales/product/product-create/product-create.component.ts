import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors!: Vendor[]; 

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    this.prodsvc.create(this.product).subscribe({
      next: (res) => {
        console.debug("Order added");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

  ngOnInit(): void {

    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vendors = res;
      }
    });
  }

}
