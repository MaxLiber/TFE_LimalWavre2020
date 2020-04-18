import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactBlackListComponent } from './contact-black-list/contact-black-list.component';


// const routes: Routes = [];

export const CONTACT_ROUTES: Routes =
[
    { path: 'contact',  children: [
        { path: 'form', component: ContactFormComponent },
        { path: 'black-list', component: ContactBlackListComponent },
        ] }
];

@NgModule({
  imports: [RouterModule.forChild(CONTACT_ROUTES)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
