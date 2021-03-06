import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private username: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User){
    console.log(this.http.post<User>(this.usersUrl, user));
    return this.http.post<User>(this.usersUrl, user);
  }

  public setUtente(username: string){
    this.username = username;
  }

  public getUtente(){
    return this.username;
  }

}
