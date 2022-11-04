import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage: string;
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private authService: AuthentificationService, 
  			  private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.signInForm = this.formBuilder.group( {
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
  	}
  	);
  }

  onSubmit(){
  	const email = this.signInForm.get('email').value;
  	const password = this.signInForm.get('password').value;
  	this.authService.signIn(email, password).then(
  		() => {
  			this.router.navigate(['/produit']);
  		},
  		(error) => {
  			this.errorMessage = error; 
  		}
  	);
  }
}
