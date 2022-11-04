export class Produit {
	constructor(private nom:string, private prix:number, private quantiteEnStock:number, 
		private description:string){}

		public setPrix(newPrix:number){this.prix = newPrix;}
		public getPrix():number{return this.prix;}

		public getNom():string{ return this.nom;}
		public setNom(newNom:string){this.nom = newNom;}

		public getQuantiteEnStock():number{ return this.quantiteEnStock;}
		public setQuantiteEnStock(newQuantiteEnStock:number){this.quantiteEnStock = newQuantiteEnStock;}

		public getDescription():string{ return this.description;}
		public setDescription(newDescription:string){this.description = newDescription;}
}
