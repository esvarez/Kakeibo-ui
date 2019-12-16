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
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatDividerModule,
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
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class MaterialModule { }
