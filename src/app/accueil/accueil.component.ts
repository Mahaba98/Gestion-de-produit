import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private produitService:ProduitService, private router: Router) {}

  produitsSubscription: Subscription;
  produits : any[];
  
  ngOnInit() {
    this.produitsSubscription = this.produitService.produitSubject.subscribe(
      (produits: any[]) => {
        this.produits = produits;
      }
    );
    this.produitService.getProduitsFromServer();
    this.produitService.emitProduitSubject();
  }
  
}
