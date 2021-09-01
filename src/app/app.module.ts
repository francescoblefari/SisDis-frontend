import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './component/user/user-list/user-list.component';
import {UserFormComponent} from './component/user/user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './service/user/user.service';
import {ProdottoListComponent} from './component/prodotto/prodotto-list/prodotto-list.component';
import {CarrelloListComponent} from './component/carrello-list/carrello-list.component';
import {AcquistoComponent} from './component/acquisto/acquisto.component';
import {ClienteComponent} from './component/cliente/cliente.component';
import {CookieService} from 'ngx-cookie-service';
import {UserLoginComponent} from './component/user/user-login/user-login.component';
import {ProdottoComponent} from './component/prodotto/prodotto/prodotto.component';
import {RecensioneListComponent} from './component/recensione-list/recensione-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './component/navbar/navbar.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {FooterComponent} from './component/footer/footer.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    ProdottoListComponent,
    CarrelloListComponent,
    AcquistoComponent,
    ClienteComponent,
    UserLoginComponent,
    ProdottoComponent,
    RecensioneListComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    OAuthModule.forRoot(),
    AngularFireDatabaseModule
  ],
  providers: [UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
