import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [

  { path: '', component: HomeComponent}, 
  { path: 'form', component: FormComponent}, 

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
