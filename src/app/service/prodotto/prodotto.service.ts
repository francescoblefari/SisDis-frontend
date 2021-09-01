import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Prodotto} from '../../model/prodotto';
import {Observable} from 'rxjs';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private prodottoUrl: string;
  private getProdotto: string;
  private addToCartUrl: string;
  private carrelloUrl: string;
  private eliminaDaCarrelloUrl: string;
  private acquistaUrl: string;

  constructor(private http: HttpClient, private userService: UserService) {
    this.prodottoUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/prodotto/getProdotti';
    this.getProdotto = 'https://app-progetto-sisdis-backend.herokuapp.com/prodotto/getProdotto';

  }

  public findAll(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.prodottoUrl);
  }

  public save(prodotto: Prodotto) {
    return this.http.post<Prodotto>(this.prodottoUrl, prodotto);
  }

  public findById(prodottoId: string): Observable<Prodotto> {
    return this.http.post<Prodotto>(this.getProdotto, prodottoId);
  }

}
