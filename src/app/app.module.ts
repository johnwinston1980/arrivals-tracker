import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './/app-routing.module'

import { LoginModule } from './components/login/shared/login.module'
import { MainModule } from './components/main/shared/main.module'

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,   
    ToolbarComponent     
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    LoginModule,
    MainModule,      
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
