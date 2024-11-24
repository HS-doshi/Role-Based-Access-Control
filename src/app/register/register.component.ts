import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private formbuild: FormBuilder) {}

  registerForm() {
    return this.formbuild.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: [
        '',
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
      gender: ['Male', Validators.required],
      role: [false],
      isActive: [false],
      confirmPassword: [''],
    });
  }
  registration() {
    if (this.registerForm().valid) {
    } else {
    }
  }
}
