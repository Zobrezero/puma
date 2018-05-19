import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importar animaciones para el navegador web
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importar animaciones sin dependencias
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconRegistry,
  MatIconBase,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // importar dentro del modulo
    BrowserAnimationsModule,
    // material
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    // importar dentro del modulo
    BrowserAnimationsModule,
    // material
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
  ],
})
export class MaterialModule { }
