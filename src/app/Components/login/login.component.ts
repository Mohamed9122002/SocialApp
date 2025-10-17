import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../Core/Services/users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _formBuilder = inject(FormBuilder)
    private readonly _UsersService = inject(UsersService)
    private readonly _Router = inject(Router)
  loginForm: FormGroup = this._formBuilder.group({
       email: [null, [Validators.required, Validators.email]],
       password: [null, [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
     });
loginFormSubmit():void{
      if (this.loginForm.valid) {
      this._UsersService.Signin(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message == "success") {
            localStorage.setItem("UserToken",res.token)
            this._UsersService.saveUserData()
            this._Router.navigate(['/home'])
          }
        }
      })
    } else {
      this.loginForm.markAllAsTouched();
    }
}
}
