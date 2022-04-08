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

  reject(userId: number, req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/reject/${userId}`, req) as Observable<Request>
  }

  approve(userId: number, req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/approve/${userId}`, req) as Observable<Request>
  }

  review(userId: number, req: Request): Observable<any> {
    return this.http.put(`${this.baseUrl}/review/${userId}`, req) as Observable<Request>
  }

  requests(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseUrl}/reviews/${userId}`) as Observable<Request[]>
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
