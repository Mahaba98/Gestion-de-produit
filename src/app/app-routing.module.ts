import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
