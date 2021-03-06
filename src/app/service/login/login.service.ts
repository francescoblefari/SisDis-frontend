import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string;
  private risposta;
  constructor(private http: HttpClient) {
    this.loginUrl = 'http://localhost:8080/login';
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public login(user: User): Observable<User>{
    return this.http.post<User>( this.loginUrl, user, this.httpOptions);
  }
  
}
