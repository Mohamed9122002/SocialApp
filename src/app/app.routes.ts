import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { logedGuard } from './Core/Guards/loged.guard';
import { authGuard } from './Core/Guards/auth.guard';
import { PostsComponent } from './Components/posts/posts.component';
import { CommentsComponent } from './Components/comments/comments.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', canActivate: [logedGuard], component: LoginComponent },
    { path: 'register', canActivate: [logedGuard], component: RegisterComponent },
    { path: 'change-password', canActivate: [logedGuard], component: ChangePasswordComponent },
    { path: 'home', canActivate: [authGuard], component: HomeComponent },
    { path: 'posts', canActivate: [authGuard], component: PostsComponent },
    { path: 'comments', canActivate: [authGuard], component: CommentsComponent },
    { path: "**", component: NotFoundComponent }

];
