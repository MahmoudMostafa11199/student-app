import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  httpClient = inject(HttpClient);
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(!!localStorage.getItem('token'));
  }

  login(email: string, password: string): Observable<{ success: boolean; token: string }> {
    return this.httpClient
      .post<{ success: boolean; token: string }>(`${environment.baseAPIURL}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('email', email);
          localStorage.setItem('token', res.token);
          this.loginStatus.next(true);
        }),
      );
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loginStatus;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
