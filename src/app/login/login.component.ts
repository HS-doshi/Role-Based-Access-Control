import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor() {}

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }
  login(): any {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const role = email === 'admin@example.com' ? 'admin' : 'user';
    }
  }

  register(): any {
    if (this.registerForm.valid) {
      this.toggleForm('login');
    } else {
    }
  }
}
