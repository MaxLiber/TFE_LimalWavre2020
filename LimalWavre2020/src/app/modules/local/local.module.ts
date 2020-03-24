import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalComponent } from './local/local.component';
import { MaterialModule } from '../../modules.vendors/google.angular.material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocalRoutingModule } from './local-routing.module';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';


@NgModule({
  declarations: [LocalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    LocalRoutingModule,
    
  ],
  exports: [
    LocalRoutingModule,
    MaterialModule,
  ]
})
export class LocalModule { }







