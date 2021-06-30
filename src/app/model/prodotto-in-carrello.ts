import {Prodotto} from './prodotto';
import {User} from './user';

export class ProdottoInCarrello {
  id: number;
  prezzo: number;
  qta: number;
  prodotto: Prodotto;
  utente: User;
}
