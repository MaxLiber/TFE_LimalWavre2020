import { NgModule, InjectionToken } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
// import { MatCard } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
import { MatMenuModule  } from '@angular/material/menu';
import { MatButtonToggleModule  } from '@angular/material/button-toggle';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule  } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

// const MAT_DIALOG_DEFAULT_OPTIONS: InjectionToken<MatDialogConfig<any>>;
@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatRadioModule
  ],

  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatStepperModule,
    MatRadioModule
  ],

  declarations: [],

  providers: [
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class MaterialModule { }
