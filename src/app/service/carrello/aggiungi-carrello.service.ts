import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProdottoInCarrello } from 'src/app/model/prodotto-in-carrello';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DettaglioOrdine } from 'src/app/model/dettaglio-ordine';

@Injectable({
  providedIn: 'root'
})
export class AggiungiCarrelloService {

  private aggiungiUrl: string;
  private acquistaUrl: string;
  private carrelloUrl: string;
  private eliminaDaCarrelloUrl: string;

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.aggiungiUrl = 'http://localhost:8080/aggiungi';
    this.acquistaUrl = 'http://localhost:8080/acquista';
    this.carrelloUrl = 'http://localhost:8080/carrello';
    this.eliminaDaCarrelloUrl = 'http://localhost:8080/eliminaDaCarrello';
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addToCart(prodottoInCarrello: ProdottoInCarrello){
    this.http.post(this.aggiungiUrl, prodottoInCarrello, this.httpOptions).subscribe();
  }

  public getCart(username: string): Observable<ProdottoInCarrello[]>{
    return this.http.post<ProdottoInCarrello[]>(this.carrelloUrl, username, this.httpOptions);
  }

  public eliminaProdottoInCarrello(prodottoInCarrello: ProdottoInCarrello){
    this.http.post(this.eliminaDaCarrelloUrl, prodottoInCarrello, this.httpOptions).subscribe();
  }

  public acquista(){
    this.http.post(this.acquistaUrl, this.cookie.get('username'), this.httpOptions).subscribe();
  }


}
