import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistenerHighlight]'
})
export class HostlistenerHighlightDirective {
  @HostBinding('style.color')
  color = '#00ff7f';

  constructor() {}

  @HostListener('mouseenter')
  mouseenter(eventData: Event) {
    this.color = '#20b2aa';
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.color = '#00ff7f';
  }
}
