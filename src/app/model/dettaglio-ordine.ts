import { Prodotto } from './prodotto';
import { User } from './user';
import { Acquisto } from './acquisto';

export class DettaglioOrdine {
  id: number;
  prezzo: number;
  qta: number;
  prodotto: Prodotto;
  utente: User;
  acquisto: Acquisto;
  giorno: number;

  constructor(giorno: number) {
    giorno = this.acquisto.data.getDate();
  }

}
