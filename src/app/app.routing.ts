import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimalsComponent } from './animals/animals.component';
import { ContactComponent } from './contact/contact.component';
import { CuidadoresComponent } from './cuidadores/cuidadores.component';
import { MarketComponent } from './market/market.component';
import { KeepersComponent } from './keepers/keepers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const AppRutas:Routes = [   
    //{path:'', component: AppComponent },
    {path:'', redirectTo:'contact', pathMatch: 'full' },
    {path:'home', component: HomeComponent },
    {path:'animals', component: AnimalsComponent },
    {path:'contact', component: ContactComponent },
    {path:'cuidadores', component: CuidadoresComponent },
    {path:'market', component: MarketComponent },
    {path:'keepers', component: KeepersComponent },
    {path:'login', component: LoginComponent },
    {path:'register', component: RegisterComponent },
    {path:'**', component: AppComponent }
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( AppRutas );