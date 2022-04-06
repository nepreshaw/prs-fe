import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:47039/api/products"

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Product[]>
  }

  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Product>
  }

  create(Product: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}`, Product) as Observable<Product>
  }

  change(Product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/${Product.id}`, Product ) as Observable<Product>
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>
  }


}
