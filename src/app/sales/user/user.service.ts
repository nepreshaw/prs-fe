import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string="http://localhost:47039/api/users"

  constructor(
    private http: HttpClient
  ) { }
  
  list(): Observable<User[]>{
    return this.http.get(`${this.baseUrl}`) as Observable<User[]>
  }

}
