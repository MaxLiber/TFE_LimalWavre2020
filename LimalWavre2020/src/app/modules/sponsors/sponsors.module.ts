import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { MaterialModule } from '../../modules.vendors/google.angular.material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SponsorsRoutingModule } from './sponsors-routing.module';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';


@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    SponsorsRoutingModule,
    
  ],
  exports: [
    SponsorsRoutingModule,
    MaterialModule,
  ]
})
export class SponsorsModule { }








