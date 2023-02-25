import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './components/main/main.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistryFormComponent } from './components/registry-form/registry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    LoginFormComponent,
    RegistryFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap:[
    MainComponent
  ]
})
export class AuthModule { }
