import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private ele: ElementRef) {
    console.log(ele);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('pink', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: any, color: any) {
    this.ele.nativeElement.style.background = bgColor;
    this.ele.nativeElement.style.color = color;
  }
}
