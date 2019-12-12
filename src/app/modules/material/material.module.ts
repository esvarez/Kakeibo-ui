import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatIconModule,
  MatListModule,
  MatSliderModule, 
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatTabsModule,
} from '@angular/material'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule, 
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule { }
