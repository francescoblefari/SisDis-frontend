import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() accessoEffettuato = new EventEmitter<boolean>();
  logged: boolean;

  constructor(private cookie: CookieService, public route: Router) {
    this.accessoEffettuato.emit(this.logged);
  }

  ngOnInit(): void {
    this.route.navigate(['/prodotti']);
  }

  accesso(): boolean {
    if (this.cookie.get('logged') === 'true') {
      this.logged = true;
    } else {
      this.logged = false;
    }
    return this.logged;
  }

  logout() {
    this.cookie.set('logged', 'false');
    this.cookie.set('username', 'null');
    this.cookie.set('password', 'null');
    this.route.navigate(['/']);
  }

  visualizzaBack(): boolean {
    return this.route.url.match('/dettaglioProdotto/.*') ? true : false;
  }

}
