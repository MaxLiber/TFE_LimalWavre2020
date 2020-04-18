import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactBlackListComponent } from './contact-black-list/contact-black-list.component';
import { MaterialModule } from '../../modules.vendors/google.angular.material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactRoutingModule } from './contact-routing.module';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';



@NgModule({
  declarations: [ContactFormComponent, ContactBlackListComponent],
  imports: [
    CommonModule,
    MdBootstrapProModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
  ],
  exports: [
    ContactRoutingModule,
  ]
})
export class ContactModule { }
