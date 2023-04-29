import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
// forms module
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// import material modules
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule, LoginRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatCardModule, MatInputModule, MatButtonModule
  ],
})
export class LoginModule { }
