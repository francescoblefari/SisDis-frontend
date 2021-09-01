import {Component, OnInit} from '@angular/core';
import {ProdottoInCarrello} from '../../model/prodotto-in-carrello';
import {Router} from '@angular/router';
import {AggiungiCarrelloService} from '../../service/carrello/aggiungi-carrello.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-carrello-list',
  templateUrl: './carrello-list.component.html',
  styleUrls: ['./carrello-list.component.css']
})
export class CarrelloListComponent implements OnInit {

  carrello: ProdottoInCarrello[];
  risposta: ProdottoInCarrello[];
  public qta;

  constructor(private aggiungiCarrello: AggiungiCarrelloService,
              private router: Router,
              private cookie: CookieService) {
  }

  ngOnInit(): void {
    this.aggiungiCarrello.getCart(this.cookie.get('username')).subscribe(data => {
      this.carrello = data;
    });
  }

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  public elimina(prodottoInCarrello: ProdottoInCarrello) {
    this.aggiungiCarrello.eliminaProdottoInCarrello(prodottoInCarrello);
    this.goToChart();
  }

  async acquista() {
    this.aggiungiCarrello.acquista();
    await this.sleep(500);
    this.router.navigate(['/acquisti']);
  }

  add(p: ProdottoInCarrello) {
    this.carrello.forEach(e => {
      if (e === p && p.qta < p.prodotto.qta) {
        ++e.qta;
      }
    });
  }

  sub(p: ProdottoInCarrello) {
    this.carrello.forEach(e => {
      if (e === p && p.qta > 0) {
        --e.qta;
      }
    });
  }

  private goToChart() {
    window.location.reload();
  }

}
