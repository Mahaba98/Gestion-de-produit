import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErreurNotFoundComponent } from './erreur-not-found/erreur-not-found.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuardService } from './auth-guard.service';
import { FcfaPipe } from './fcfa.pipe';
import { SingleproduitComponent } from './singleproduit/singleproduit.component';


const routes: Routes = [
  { path: 'produit', canActivate: [AuthGuardService], component: ProduitComponent},
  { path: 'add-produit', canActivate: [AuthGuardService], component:AddProduitComponent},
  { path: 'accueil',  component: AccueilComponent},
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'produits/:index', component: SingleproduitComponent},
  { path: '', redirectTo: 'produit', pathMatch: 'full'},
  { path: 'not-found', component: ErreurNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AddProduitComponent,
    AccueilComponent,
    ErreurNotFoundComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FcfaPipe,
    SingleproduitComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
