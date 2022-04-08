import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLine } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseUrl: string="http://localhost:47039/api/requestlines"


  constructor(
    private http: HttpClient
  ) { }

  create(req: RequestLine): Observable<RequestLine> {
    return this.http.post(`${this.baseUrl}`, req) as Observable<RequestLine>
  }

  change(req: RequestLine): Observable<any> {
    return this.http.put(`${this.baseUrl}/${req.id}`, req) as Observable<any>
  }
}
