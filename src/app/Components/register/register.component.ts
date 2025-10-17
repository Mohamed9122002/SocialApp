import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../Core/Services/users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _formBuilder = inject(FormBuilder)
  private readonly _UsersService = inject(UsersService)
  private readonly _Router = inject(Router)
  registerForm: FormGroup =
    this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
      rePassword: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required]
    });
  registerFormSubmit(): void {
    if (this.registerForm.valid) {
      this._UsersService.SignUp(this.registerForm.value).subscribe({
        next: (res) => {
          if (res.message === "success") {
            this._Router.navigate(['/login'])
          }
        }
      })
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
