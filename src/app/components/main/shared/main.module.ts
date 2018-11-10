import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from '../main/main.component'
import { HttpClientModule } from '@angular/common/http';

import {
  MatExpansionModule, 
  MatAccordion, 
  MatExpansionPanel, 
  MatExpansionPanelTitle, 
  MatExpansionPanelDescription, 
  MatExpansionPanelHeader
} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    HttpClientModule
  ],
  exports: [ MatExpansionModule
  ],
  declarations: [ MainComponent ]
})
export class MainModule { }
