import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalComponent } from './local/local.component';


// const routes: Routes = [];

export const CONTACT_ROUTES: Routes =
[
    { path: 'local',  children: [
        { path: 'local', component: LocalComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(CONTACT_ROUTES)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }
