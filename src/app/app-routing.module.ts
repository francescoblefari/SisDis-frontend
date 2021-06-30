import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {UserFormComponent} from './component/user/user-form/user-form.component';
import {ProdottoListComponent} from './component/prodotto/prodotto-list/prodotto-list.component';
import {CarrelloListComponent} from './component/carrello-list/carrello-list.component';
import {AcquistoComponent} from './component/acquisto/acquisto.component';
import {ClienteComponent} from './component/cliente/cliente.component';
import {RecensioneListComponent} from './component/recensione-list/recensione-list.component';
import {ProdottoComponent} from './component/prodotto/prodotto/prodotto.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'prodotti', component: ProdottoListComponent},
  {path: 'carrello', component: CarrelloListComponent},
  {path: 'acquisti', component: AcquistoComponent},
  {path: 'client', component: ClienteComponent},
  {path: 'recensioni', component: RecensioneListComponent},
  {path: 'dettaglioProdotto/:prodottoId', component: ProdottoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
