import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { ProdottoService } from '../service/prodotto/prodotto.service';
import { ProdottoInCarrello } from '../model/prodotto-in-carrello';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../model/user';
import { AggiungiCarrelloService } from '../service/carrello/aggiungi-carrello.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-prodotto-list',
  templateUrl: './prodotto-list.component.html',
  styleUrls: ['./prodotto-list.component.css']
})
export class ProdottoListComponent implements OnInit, OnDestroy{

  prodotti: Prodotto[];
  prodottoInCarrello: ProdottoInCarrello;
  utente: User;
  
  dettaglioProdotto: Prodotto;
  elemento: number;

  progresso : number;
  prodottiCaricati: boolean = false;

  constructor(private prodottoService: ProdottoService,
              private cookie: CookieService,
              private aggiungiCarrelloService: AggiungiCarrelloService,
              private route: ActivatedRoute) {
    this.prodottoInCarrello = new ProdottoInCarrello();
    this.utente = new User();
    this.prodottoInCarrello.utente = this.utente;
    this.elemento = 0;
  }

  ngOnInit(): void {
    this.prodottiCaricati = false;
    this.prodottoService.findAll().subscribe(data => {
      this.sleep(200);
      this.prodotti = data; 
      this.prodottiCaricati = true;
      this.prodotti.forEach( e => {
        e.nome = e.nome.substring(0,80);
      })
    });
  }


  ngOnDestroy(): void {
    this.prodotti = null;
  }

  sleep(mills: number): void{
    var start = new Date().getTime();
    for(var i =0;i<1e15;i++){
      if((new Date().getTime() - start)>mills)
        break;
    }
  }

  aggiungi(prodotto: Prodotto){
    this.prodottoInCarrello.utente.username = this.cookie.get('username');
    this.prodottoInCarrello.prodotto = prodotto;
    this.aggiungiCarrelloService.addToCart(this.prodottoInCarrello);
  }

  verificaQuantita(quantita: number){
    if( quantita>0){
      return true;
    } 
    return false;
  }

  async moduloTre(){
    if(this.elemento % 3==0){
      this.elemento++;
      return true;
    }else{return false;}
  }

}
