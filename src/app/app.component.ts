import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProduitApp';
  constructor(){
	var firebaseConfig = {
	    apiKey: "AIzaSyDKplViK0GrU6P3vfiac6yqzuABR2TpTAk",
	    authDomain: "projetproduitangular.firebaseapp.com",
	    databaseURL: "https://projetproduitangular.firebaseio.com",
	    projectId: "projetproduitangular",
	    storageBucket: "projetproduitangular.appspot.com",
	    messagingSenderId: "109183998255",
	    appId: "1:109183998255:web:64a675ade4c3de728a29da",
	    measurementId: "G-FVD1EZV9YB"
  	};
	  	// Initialize Firebase
  	firebase.initializeApp(firebaseConfig);
  	firebase.analytics();
  }
}
