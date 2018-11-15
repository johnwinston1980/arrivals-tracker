import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from '../toolbar/toolbar.component'

import {
  MatToolbarModule,  
  MatIconModule
} from '@angular/material'

@NgModule({
  imports: [    
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule
  ],
  declarations: []
})

export class ToolbarModule { }
