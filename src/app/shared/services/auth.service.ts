import { Injectable, OnDestroy, inject } from '@angular/core';
import { Auth, User, authState, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  userData: User | null = null;
  authStateSubscription: Subscription;
  router = inject(Router);

  constructor() {
    this.authStateSubscription = this.authState$.subscribe((user: User | null) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate(['']);
      }
      else {
        localStorage.setItem('user', '');
      }
    });
  }
  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }


  async signIn(email: string, password: string) {
    const user = await signInWithEmailAndPassword(this.auth, email, password);
    return user;
  }


  async signOut() {
    await this.auth.signOut();
    localStorage.removeItem('user');
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return !!user;
  }
}
