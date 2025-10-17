import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  private readonly _formBuilder = inject(FormBuilder)
  changePassword: FormGroup = this._formBuilder.group({
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    newpassword: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });
}
