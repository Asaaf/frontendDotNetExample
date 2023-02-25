import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap:[
    MainComponent
  ]
})
export class HomeModule { }
