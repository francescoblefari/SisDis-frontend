import {Component, OnInit} from '@angular/core';
import {DettaglioOrdine} from '../../model/dettaglio-ordine';
import {DettaglioOrdineService} from '../../service/dettaglioOrdine/dettaglio-ordine.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-acquisto',
  templateUrl: './acquisto.component.html',
  styleUrls: ['./acquisto.component.css']
})
export class AcquistoComponent implements OnInit {

  dettaglioOrdine: DettaglioOrdine[];

  constructor(private dettaglioOrdineService: DettaglioOrdineService,
              private cookie: CookieService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.dettaglioOrdineService
      .findDettaglioOrdine(this.cookie.get('username'))
      .subscribe(data => {
        this.dettaglioOrdine = data;
      });

    if (this.cookie.get('logged') === 'false') {
      this.route.navigate(['/']);
    }
  }

}
