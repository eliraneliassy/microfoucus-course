import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appInfinteScroll]'
})
export class InfinteScrollDirective {

  @Output() bottomReached: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isloading: boolean;
  constructor() { }

  getDistFromBottom() {

    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    if (this.isloading) { return; }

    const distance = this.getDistFromBottom();
    console.log(distance);
    if (distance < 20) {
      this.bottomReached.emit(true);
      this.isloading = true;

    }

  }

}
