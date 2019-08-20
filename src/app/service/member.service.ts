import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8090/api/createuser';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  addProduct (product : any): Observable<any> {
    console.log(product);
    return this.http.post<any>(this.endpoint ,product,this.httpOptions);
  }

  getAllProduct (): Observable<any> {
    return this.http.get<any>('http://localhost:8090/api/userdetails');
  }

}
