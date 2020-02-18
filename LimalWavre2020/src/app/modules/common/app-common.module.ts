import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './header/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../../modules.vendors/primeng/primeng.module';
import { MdBootstrapProModule } from '../../modules.vendors/mdbootstrap/md-bootstrap-pro.module';
import { EnvService } from './services/env.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../modules.vendors/google.angular.material/material.module';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    PrimengModule,
    MdBootstrapProModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    EnvService
  ]
})
export class AppCommonModule {
}
