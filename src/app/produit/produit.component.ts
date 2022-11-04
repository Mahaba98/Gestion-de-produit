import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProduitService } from '../produit.service'
import { Produit } from '../produit'
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],  
})
export class ProduitComponent implements OnInit, OnDestroy {

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

  isAdded = false;
  
    detail(clickedProduit: Produit){
      const index = this.produits.findIndex(
        (produitElt) => {
          if(produitElt === clickedProduit){
            return true;
          }
        }
      );

      this.router.navigate(['/produits/'+index]);
    }

  addProduit(produit:Produit){
  	this.produitService.addProduit(produit);
  	this.isAdded = true; 
  }	

  delProduit(produit: Produit){
    this.produitService.delProduit(produit);
  }

  ngOnDestroy(){
    this.produitsSubscription.unsubscribe();
  }
  produit : Produit;
  clicked: Produit = null;

  onSubmit(form: NgForm){
    const index = this.produits.findIndex(
			(produitElt) => {
				if(produitElt === this.clicked){
					return true;
				}
			}
    );


  	const nom = form.value['nom'];
  	const prix = form.value['prix'];
  	const qtite = form.value['qtite'];
  	const description = form.value['description'];

    this.produit = new Produit(nom, prix, qtite, description);
    
    this.produitService.updateProduit(this.produit, index);
    this.clicked = null;
  	this.router.navigate(['/produit']);
  }
  
  
  clickedProduit:Produit = null;
}
