import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostlistenerHighlight]'
})
export class HostlistenerHighlightDirective {
  @HostBinding('style.color')
  color: string = 'darkcyan';

  @HostBinding('style.cursor')
  pointer: string = 'pointer';

  constructor() {}

  @HostListener('mouseenter')
  mouseenter(eventData: Event): void {
    this.color = 'crimson';
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event): void {
    this.color = 'darkcyan';
  }
}
