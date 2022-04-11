import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = "http://localhost:47039/api/requests"

  constructor(
    private http: HttpClient
  ) { }

  reject(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${req.id}`, req) as Observable<any>
  }

  approve(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/approve/${req.id}`, req) as Observable<any>
  }
  //brings back reviews 
  review(req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/review`, req) as Observable<any>
  }
  //this should bring back all requests from menu click
  //list of reqs that are not your userid
  requests(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}/review/${userId}`) as Observable<Request[]>
  }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<Request[]>
  }

  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Request>
  }

  create(Request: Request): Observable<Request> {
    return this.http.post(`${this.baseUrl}`, Request) as Observable<Request>
  }

  change(Request: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/${Request.id}`, Request ) as Observable<Request>
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>
  }
}
