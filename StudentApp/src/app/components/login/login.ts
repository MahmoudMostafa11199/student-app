import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  router = inject(Router);
  route = inject(ActivatedRoute);
  authService = inject(Auth);
  toastService = inject(ToastService);

  loading = signal<boolean>(false);

  user = {
    email: '',
    password: '',
  };

  constructor() {
    this.authService.isLoggedIn().subscribe({
      next: (val: boolean) => {
        if (val) {
          this.router.navigateByUrl('/');
        }
      },
    });
  }

  login() {
    if (!this.user.email || !this.user.password) return;

    this.loading.set(true);

    this.authService.login(this.user.email, this.user.password).subscribe({
      next: (val) => {
        if (val) {
          this.user = { email: '', password: '' };
          this.toastService.success('Login successful');
          this.loading.set(false);

          const url = this.route.snapshot.queryParams['returnUrl'];
          if (url) {
            this.router.navigateByUrl(url);
            return;
          }

          this.router.navigateByUrl('/');
        }
      },

      error: (err) => {
        this.loading.set(false);
        this.toastService.error('Invalid email or password');
        console.error(err);
      },
    });
  }
}
