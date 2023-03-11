import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDimensionDirective } from 'src/app/directives/image-dimension/image-dimension.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    MainComponent,
    GalleryComponent,
    ImageDimensionDirective
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
