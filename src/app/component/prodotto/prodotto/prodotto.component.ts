import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../../../model/prodotto';
import { RecensioneService } from '../../../service/recensione/recensione.service';
import { Recensione } from '../../../model/recensione';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdottoService } from '../../../service/prodotto/prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  recensioni: Recensione[];

  constructor(private recensioneService: RecensioneService,
    public route: ActivatedRoute,
    public prodottoService: ProdottoService) { }

  prodotto: Prodotto;
  prodottoId: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.prodottoId = paramMap.get('prodottoId');
      this.prodottoService.findById(this.prodottoId)
        .subscribe(prod => {
          this.prodotto = prod;
          this.recensioneService.recensiti(this.prodotto)
            .subscribe(data => { this.recensioni = data; });
        });
    });
  }

  ngOnChanges(): void {
    this.recensioneService.recensiti(this.prodotto)
      .subscribe(data => { this.recensioni = data; });
  }


}
