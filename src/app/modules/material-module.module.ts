import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class MaterialModuleModule { }
