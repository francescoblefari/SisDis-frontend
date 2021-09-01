import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DettaglioOrdine} from 'src/app/model/dettaglio-ordine';

@Injectable({
  providedIn: 'root'
})
export class DettaglioOrdineService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private dettaglioOrdineUrl: string;

  constructor(private http: HttpClient) {
    this.dettaglioOrdineUrl = 'https://app-progetto-sisdis-backend.herokuapp.com/getListDettaglioOrdine';
  }

  public findDettaglioOrdine(username: string): Observable<DettaglioOrdine[]> {
    return this.http.post<DettaglioOrdine[]>(this.dettaglioOrdineUrl, username, this.httpOptions);
  }

}
