import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import { CarrelloListComponent } from './carrello-list/carrello-list.component';
import { AcquistoListComponent } from './acquisto-list/acquisto-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AdminComponent } from './admin/admin.component';
import { CookieService } from 'ngx-cookie-service';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { RecensioneListComponent } from './recensione-list/recensione-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { OAuthModule} from 'angular-oauth2-oidc'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ProdottoListComponent,
    CarrelloListComponent,
    AcquistoListComponent,
    ClienteComponent,
    AdminComponent,
    UserLoginComponent,
    ProdottoComponent,
    RecensioneListComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    OAuthModule.forRoot()
  ],
  providers: [UserService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
