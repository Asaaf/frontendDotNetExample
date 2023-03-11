import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[getImageDimension]'
})
export class ImageDimensionDirective {

  @Output() public getImageDimension = new EventEmitter<Object>();

  constructor(private el: ElementRef) { }

  @HostListener('load') onLoad() {
    let width = this.el.nativeElement.offsetWidth;
    let height = this.el.nativeElement.offsetHeight;
    let dimension = { width: width, height: height };
    this.getImageDimension.emit(dimension);
  }

}
