import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prodotto } from '../../model/prodotto';
import { Observable } from 'rxjs';
import { ProdottoInCarrello } from 'src/app/model/prodotto-in-carrello';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private prodottoUrl: string;
  private getProdotto: string;
  private addToCartUrl: string;
  private carrelloUrl: string;
  private eliminaDaCarrelloUrl: string;
  private acquistaUrl: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.prodottoUrl = 'http://localhost:8080/prodotto/getProdotti';
    this.getProdotto = 'http://localhost:8080/prodotto/getProdotto';

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public findAll(): Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>(this.prodottoUrl);
  }

  public save(prodotto: Prodotto){
    return this.http.post<Prodotto>(this.prodottoUrl, prodotto);
  }

  public findById(prodottoId: string): Observable<Prodotto>{
    return this.http.post<Prodotto>(this.getProdotto, prodottoId);
  }

}
