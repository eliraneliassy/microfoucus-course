import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective implements OnInit {

  @Input() bgColor: string;

  @HostListener('window:scroll') mouseenter($event) {

  }


  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
    console.log(this.element);
  }

  ngOnInit(): void {
    this.renderer.setStyle
      (this.element.nativeElement, 'background-color', this.bgColor);
  }



}
