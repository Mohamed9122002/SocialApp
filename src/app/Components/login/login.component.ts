import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _formBuilder = inject(FormBuilder)
  loginForm: FormGroup = this._formBuilder.group({
       email: [null, [Validators.required, Validators.email]],
       password: [null, [Validators.required,Validators.pattern(/^\w{6,}$/)]],
     });
}
