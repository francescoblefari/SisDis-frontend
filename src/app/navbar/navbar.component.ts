import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() accessoEffettuato = new EventEmitter<boolean>();
  logged :boolean;
  constructor(private cookie: CookieService, private route: Router) { 
    this.accessoEffettuato.emit(this.logged);
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
