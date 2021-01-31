import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading: true;
  submitted: false;
  constructor(private router:Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      fullName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[a-zA-Z]*')]],
      email:['', [Validators.required,Validators.email]],
      mobile:['', [Validators.required, Validators.minLength(10)]],
      password:[null, [ Validators.required, Validators.min(6)], Validators.maxLength(10)],
      confirm:[null, [Validators.required, Validators.min(6),Validators.maxLength(10)]]
    })
  }
  onSubmit(){
    console.log(this.signupForm.value);
    
  }

  get email(){
    return this.signupForm.get('email')
  }

  get fullName(){
    return this.signupForm.get('fullName')
  }

  get mobile(){
    return this.signupForm.get('mobile')
  }

  get password(){
    return this.signupForm.get('password')
  }

  get confirm(){
    return this.signupForm.get('confirm')
  }

  }



