import { Injectable } from '@angular/core';
import { Produit } from './produit';
import { HttpClient } from '@angular/common/http';
import{ Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

	 constructor(private http: HttpClient) {}

	ngOnInit(){

	}

	produitSubject = new Subject<any[]>();

	private produits:Array<Produit> = new Array<Produit>();

	emitProduitSubject(){
		this.produitSubject.next(this.produits.slice());
	}
	getProduits() : Array<Produit> { 
		return this.produits;
		this.emitProduitSubject();
	}

	addProduit(newProduit: Produit){
		this.produits.push(newProduit);
		this.saveProduitsInServer();
		this.emitProduitSubject();
	}

	getOneProduit(index: number){
		return new Promise(
			(resolve, reject) => {
				firebase.database().ref('/produits/'+ index).once('value').then(
					(data) => {
						resolve(data.val());
					}, (error) => {
						reject(error);
					}
				);
			}
		);
	}
	
	getProduit(nom:string) : Produit{
		for (const produit of this.produits){
			if (produit.getNom() === nom) {
				return produit;
			}
		}
		this.emitProduitSubject();
	}

	delProduit(produit: Produit){
		const index = this.produits.findIndex(
			(produitElt) => {
				if(produitElt === produit){
					return true;
				}
			}
		);

		this.produits.splice(index, 1);
		this.saveProduitsInServer();
		this.emitProduitSubject();
	}

	saveProduitsInServer(){
		firebase.database().ref('/produits').set(this.produits);
	}

	updateProduit(produit: Produit, index:number){
		this.produits[index] = produit;
		this.saveProduitsInServer();
		this.emitProduitSubject();
	}

	getProduitsFromServer(){
		firebase.database().ref('/produits').on('value', (data) => {
			this.produits = data.val() ? data.val() : [];
			this.emitProduitSubject();
		});
	}

	
}
