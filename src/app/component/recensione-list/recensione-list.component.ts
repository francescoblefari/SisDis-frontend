import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecensioneService } from '../../service/recensione/recensione.service';
import { Acquisto } from '../../model/acquisto';
import { Prodotto } from '../../model/prodotto';

@Component({
  selector: 'app-recensione-list',
  templateUrl: './recensione-list.component.html',
  styleUrls: ['./recensione-list.component.css']
})
export class RecensioneListComponent implements OnInit {

  recensibili: Prodotto[];
  prodottoDaRecensire: string[];
  constructor(private recensioneService: RecensioneService, private route: Router) { }

  ngOnInit(): void {
    this.recensioneService.recensibili().subscribe(data => { this.recensibili = data; });
  }

  recensisci(index: string, prodotto: Prodotto){
    const v = ( document.getElementById(index) as HTMLInputElement ).value;
    console.log(v);
    this.recensioneService.recensisci(v, prodotto);
    window.location.reload()
  }

}
