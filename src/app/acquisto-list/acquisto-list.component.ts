import { Component, OnInit } from '@angular/core';
import { DettaglioOrdine } from '../model/dettaglio-ordine';
import { ProdottoService } from '../service/prodotto/prodotto.service';
import { DettaglioOrdineService } from '../service/dettaglioOrdine/dettaglio-ordine.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acquisto-list',
  templateUrl: './acquisto-list.component.html',
  styleUrls: ['./acquisto-list.component.css']
})
export class AcquistoListComponent implements OnInit {

  dettaglioOrdine: DettaglioOrdine[];
  constructor(private dettaglioOrdineService: DettaglioOrdineService,
              private cookie: CookieService,
              private route: Router) { }

  ngOnInit(): void {
    this.dettaglioOrdineService
      .findDettaglioOrdine(this.cookie.get('username'))
      .subscribe(data => {this.dettaglioOrdine = data; });

    if (this.cookie.get('logged') === 'false'){
      this.route.navigate(['/']);
    }
  }

}
