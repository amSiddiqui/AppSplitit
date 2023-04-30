import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', component: DashboardComponent, canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const isLoggedIn = inject(AuthService).isLoggedIn;
    if (!isLoggedIn) {
      inject(Router).navigate(['/login']);
    }
    return isLoggedIn;
  }]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
