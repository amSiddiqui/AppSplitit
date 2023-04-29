import { Component } from '@angular/core';
// form builder
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor() {
    const fb = new FormBuilder();
    this.loginForm = fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.value);
  }
}
