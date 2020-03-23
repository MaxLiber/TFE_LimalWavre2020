import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterclubsComponent } from './interclubs/interclubs.component';


// const routes: Routes = [];

export const ADMIN_ROUTES: Routes =
[
    { path: 'admin',  children: [
        { path: 'interclubs', component: InterclubsComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
