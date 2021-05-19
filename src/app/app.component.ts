import { Component, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logged: boolean;
  title = 'progetto';

  constructor( private cookie: CookieService, private route: Router) {
    this.logged = false;
  }

  ngOnInit(): void {
  }

  accesso(): boolean{
    if (this.cookie.get('logged') === 'true'){
      this.logged = true;
    }else{this.logged = false; }
    return this.logged;
  }

  logout(){
    this.cookie.set('logged', 'false');
    this.cookie.set('username', 'null');
    this.cookie.set('password', 'null');
    this.route.navigate(['/']);
  }

}
