import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../service/prodotto/prodotto.service';
import { ProdottoInCarrello } from '../model/prodotto-in-carrello';
import { Router } from '@angular/router';
import { AggiungiCarrelloService } from '../service/carrello/aggiungi-carrello.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carrello-list',
  templateUrl: './carrello-list.component.html',
  styleUrls: ['./carrello-list.component.css']
})
export class CarrelloListComponent implements OnInit {

  carrello: ProdottoInCarrello[];
  risposta: ProdottoInCarrello[];
  constructor(private aggiiungiCarrello: AggiungiCarrelloService,
              private router: Router,
              private cookie: CookieService) {
               }

  ngOnInit(): void {
    this.aggiiungiCarrello.getCart(this.cookie.get('username')).subscribe(data => {this.carrello = data; });
  }

  sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }

  public elimina(prodottoInCarrello: ProdottoInCarrello){
    this.aggiiungiCarrello.eliminaProdottoInCarrello(prodottoInCarrello);
    this.goToChart();
  }

  private goToChart(){
    window.location.reload();
  }

  async acquista(){
    this.aggiiungiCarrello.acquista();
    await this.sleep(500);
    this.router.navigate(['/acquisti']);
  }

}
