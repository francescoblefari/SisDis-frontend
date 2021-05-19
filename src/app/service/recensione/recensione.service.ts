import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Acquisto } from 'src/app/model/acquisto';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/model/prodotto';
import { Router } from '@angular/router';
import { Recensione } from 'src/app/model/recensione';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {

  private recensibiliUrl = 'http://localhost:8080/recensibili';
  private recensisciUrl = 'http://localhost:8080/recensisci';
  private recensitiUrl = 'http://localhost:8080/recensiti';
  constructor(private cookie: CookieService,
              private http: HttpClient,
              private route: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  recensibili(): Observable<Prodotto[]>{
    return this.http.post<Prodotto[]>(this.recensibiliUrl, this.cookie.get('username'), this.httpOptions);
  }

  recensisci(valore: string, prodotto: Prodotto){
    const invio = new Invio();
    invio.valore = valore;
    invio.prodotto = prodotto;
    invio.username = this.cookie.get('username');
    this.http.post(this.recensisciUrl, invio, this.httpOptions).subscribe();
  }

  recensiti(prodotto: Prodotto): Observable<Recensione[]>{
    return this.http.post<Recensione[]>(this.recensitiUrl, prodotto, this.httpOptions);
  }

}

export class Invio{
  valore: string;
  prodotto: Prodotto;
  username: string;
}
