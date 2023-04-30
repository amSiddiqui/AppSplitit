import { Component, inject } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
