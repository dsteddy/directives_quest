import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorSize]',
  standalone: true
})
export class ChangeColorSizeDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'displayRed')
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'displayRed')
  }

}

