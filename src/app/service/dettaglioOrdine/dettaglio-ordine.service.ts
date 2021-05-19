import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DettaglioOrdine } from 'src/app/model/dettaglio-ordine';

@Injectable({
  providedIn: 'root'
})
export class DettaglioOrdineService {

  private dettaglioOrdineUrl: string;
  constructor(private http: HttpClient) {
    this.dettaglioOrdineUrl = 'http://localhost:8080/getListDettaglioOrdine';
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public findDettaglioOrdine(username: string): Observable<DettaglioOrdine[]>{
    return this.http.post<DettaglioOrdine[]>(this.dettaglioOrdineUrl, username, this.httpOptions);
  }

}
