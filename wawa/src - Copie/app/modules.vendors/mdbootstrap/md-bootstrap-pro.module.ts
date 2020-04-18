import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DropdownModule, TabsModule, WavesModule } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader, MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { InputsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { PreloadersModule } from 'ng-uikit-pro-standard';
import { CollapseModule } from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    MDBBootstrapModulesPro.forRoot(),
    DropdownModule,
    TabsModule,
    WavesModule,
    
    //ToastModule.forRoot(),
    InputsModule,
    ButtonsModule,
    PreloadersModule,
    CollapseModule,
  ],

  exports: [
    DropdownModule,
    TabsModule,
    WavesModule,
    MDBBootstrapModulesPro,
    //ToastModule
    InputsModule,
    ButtonsModule,
    PreloadersModule,
    CollapseModule,
  ],

  declarations: [],
  
  providers: [
    MDBSpinningPreloader
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ]
  
})
export class MdBootstrapProModule { }
