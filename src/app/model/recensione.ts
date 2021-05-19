import { User } from './user';
import { Prodotto } from './prodotto';

export class Recensione {
  id: number;
  relazione: string;
  utente: User;
  prodotto: Prodotto;
}
