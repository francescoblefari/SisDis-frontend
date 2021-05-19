import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { CarrelloListComponent } from './carrello-list/carrello-list.component';
import { AcquistoListComponent } from './acquisto-list/acquisto-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RecensioneListComponent } from './recensione-list/recensione-list.component';
import { ProdottoComponent } from './prodotto/prodotto.component';



const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent},
  {path: 'prodotti', component: ProdottoListComponent},
  {path: 'carrello', component: CarrelloListComponent},
  {path: 'acquisti', component: AcquistoListComponent},
  {path: 'client', component: ClienteComponent},
  {path: 'recensioni', component: RecensioneListComponent},
  {path: 'dettaglioProdotto/:prodottoId', component: ProdottoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
