import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage: string;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
  			  private authService: AuthentificationService, 
  			  private router: Router) { }

  ngOnInit() {
  	this.initForm();
  }

  initForm(){
  	this.signUpForm = this.formBuilder.group( {
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
  	}
  	);
  }

  onSubmit(){
  	const email = this.signUpForm.get('email').value;
  	const password = this.signUpForm.get('password').value;
  	this.authService.createNewUser(email, password).then(
  		() => {
  			this.router.navigate(['/produit']);
  		},
  		(error) => {
  			this.errorMessage = error; 
  		}
  	);
  }
}
