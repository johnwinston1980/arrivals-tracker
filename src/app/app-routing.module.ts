import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main/main.component'
import { LoginComponent } from './components/login/login/login.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
