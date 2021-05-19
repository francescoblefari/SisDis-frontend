import { Categoria } from './categoria';

export class Prodotto {
  id: number;
  nome: string;
  descrizione: string;
  qta: number;
  prezzo: number;
  categoria: Categoria;
  img: string;
}
