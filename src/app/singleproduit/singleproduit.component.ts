import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-singleproduit',
  templateUrl: './singleproduit.component.html',
  styleUrls: ['./singleproduit.component.css']
})
export class SingleproduitComponent implements OnInit {
  produit: Produit;

  constructor(private route: ActivatedRoute,
              private produitService: ProduitService,
              private router: Router) { }

  ngOnInit() {
    this.produit = new Produit('', 0, 0, '');
    const index = this.route.snapshot.params['index'];
    this.produitService.getOneProduit(+index).then(
      (produit: Produit) => {
        this.produit = produit;
      }
    );
  }
  retour(){
    this.router.navigate(['/produit']);
  }
}
