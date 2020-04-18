import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorsComponent } from './sponsors/sponsors.component';


// const routes: Routes = [];

export const CONTACT_ROUTES: Routes =
[
    { path: 'sponsors',  children: [
        { path: 'liste', component: SponsorsComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(CONTACT_ROUTES)],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
