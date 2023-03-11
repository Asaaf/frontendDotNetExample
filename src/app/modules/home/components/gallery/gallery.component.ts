import { Component, ElementRef } from '@angular/core';
import { Image } from 'src/app/models/files/image/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: Array<Image> = new Array();

  constructor() {
    let image1: Image = new Image();
    image1.id = 0;
    image1.url = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80";
    image1.alt = "Imagen de carro amarillo";
    image1.description = "Mercedes Modelo 2022";

    let image2: Image = new Image();
    image2.id = 1;
    image2.url = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
    image2.alt = "Imagen de carro azul";
    image2.description = "Chevrolet Camaro Modelo 2019";

    this.images.push(image1);
    this.images.push(image2);
  }

  detectDimension(event: any, img: Image) {

    if (event.width > event.height) {
      img.format = "h";
    }else{
      img.format = "v";
    }
  }
}
