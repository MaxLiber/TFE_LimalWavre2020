import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


// const routes: Routes = [];

export const AUTH_ROUTES: Routes =
[
    { path: 'auth',  children: [
        { path: 'login/:redirectUrl', component: LoginComponent },
        { path: 'login', component: LoginComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
