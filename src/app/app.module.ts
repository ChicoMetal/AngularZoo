import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutingProviders } from './app.routing';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { KeepersComponent } from './keepers/keepers.component';
import { ContactComponent } from './contact/contact.component';
import { AnimalsComponent } from './animals/animals.component';
import { MarketComponent } from './market/market.component';
import { CuidadoresComponent } from './cuidadores/cuidadores.component';

import { EmailUserModule } from "./email-user/email-user.module";
import { AdminModule } from "./admin/admin.module";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeepersComponent,
    ContactComponent,
    AnimalsComponent,
    MarketComponent,
    CuidadoresComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    EmailUserModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
