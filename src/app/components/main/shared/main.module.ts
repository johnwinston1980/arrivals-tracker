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

import {
  MatButtonModule
} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    HttpClientModule
  ],
  exports: [
    MatExpansionModule,
    MatButtonModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
