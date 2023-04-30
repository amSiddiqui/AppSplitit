import { Component, inject } from '@angular/core';
// form builder
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { AuthError } from '@angular/fire/auth';
import { AuthErrorMap } from '../shared/services/auth-err-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  errors = '';
  authService = inject(AuthService);

  constructor() {
    const fb = new FormBuilder();
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loading = true;
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
    .catch((error: AuthError) => {
      this.errors = AuthErrorMap(error.code);
    })
    .finally(() => {
      this.loading = false;
    });
  }
}
