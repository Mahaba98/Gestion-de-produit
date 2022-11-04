import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;

  constructor(private authService: AuthentificationService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        }
        else{
          this.isAuth = false;
        }
      }
    );
  }

  signOut(){
    this.authService.signOut();
  }

}
