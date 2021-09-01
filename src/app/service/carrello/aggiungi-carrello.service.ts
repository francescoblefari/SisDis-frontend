import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProdottoInCarrello} from 'src/app/model/prodotto-in-carrello';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AggiungiCarrelloService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private aggiungiUrl: string;
  private acquistaUrl: string;
  private carrelloUrl: string;
  private eliminaDaCarrelloUrl: string;

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.aggiungiUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/aggiungi';
    this.acquistaUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/acquista';
    this.carrelloUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/carrello';
    this.eliminaDaCarrelloUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/eliminaDaCarrello';
  }

  addToCart(prodottoInCarrello: ProdottoInCarrello) {
    this.http.post(this.aggiungiUrl, prodottoInCarrello, this.httpOptions).subscribe();
  }

  public getCart(username: string): Observable<ProdottoInCarrello[]> {
    return this.http.post<ProdottoInCarrello[]>(this.carrelloUrl, username, this.httpOptions);
  }

  public eliminaProdottoInCarrello(prodottoInCarrello: ProdottoInCarrello) {
    this.http.post(this.eliminaDaCarrelloUrl, prodottoInCarrello, this.httpOptions).subscribe();
  }

  public acquista() {
    this.http.post(this.acquistaUrl, this.cookie.get('username'), this.httpOptions).subscribe();
  }


}
