import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../../../service/login/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  user: User = new User();
  risposta: User = new User();

  constructor(private route: Router,
              private cookie: CookieService,
              private login: LoginService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  accedi() {
    this.login.login(this.user).subscribe(data => {
      this.risposta = data;
      if (this.risposta === null) {
        alert('attenzione risposta nulla');

      } else if (this.risposta.username === this.user.username) {
        console.log(this.risposta.username + ' risposta.username');
        this.cookie.set('logged', 'true');
        this.cookie.set('idUtente', this.risposta.id.toString());
        this.cookie.set('username', this.risposta.username);
        console.log('setted username');
      } else {
        this.cookie.set('logged', 'false');
      }
    });
  }

  visualizza() {
    console.log(this.cookie.get('logged'));
    console.log(this.cookie.get('username'));
  }


}
