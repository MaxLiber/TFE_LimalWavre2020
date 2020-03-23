import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { InterclubsComponent } from './interclubs/interclubs.component';
import { EquipesComponent } from './interclubs/equipes/equipes.component';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';
import { AdminService } from './services/admin.service';



@NgModule({
  declarations: [
    InterclubsComponent, 
    EquipesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdBootstrapProModule,
  ],
  exports: [
    AdminRoutingModule,
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule { }
