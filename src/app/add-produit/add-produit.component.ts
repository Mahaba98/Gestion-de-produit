import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ProduitService } from '../produit.service';
import { Router } from "@angular/router";
import { Produit } from '../produit';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private produitService:ProduitService, private router: Router) { }

  ngOnInit() {
  }
  produit: Produit;

  onSubmit(form: NgForm){
  	const nom = form.value['nom'];
  	const prix = form.value['prix'];
  	const qtite = form.value['qtite'];
  	const description = form.value['description'];

  	this.produit = new Produit(nom, prix, qtite, description);

  	this.produitService.addProduit(this.produit);
  	this.router.navigate(['/produit']);
  }
}
