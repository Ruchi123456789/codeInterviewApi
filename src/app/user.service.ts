import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Iuser} from "./user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string = "https://jsonplaceholder.typicode.com/users";


  constructor(private http: HttpClient) { }

  getUsers():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this.url);
  }
}
