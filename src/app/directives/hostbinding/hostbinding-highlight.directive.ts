import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective {
  @HostBinding('style.color')
  color: string;
  @HostBinding('style.cursor')
  cursor: string;
  constructor() {
    this.color = 'darkorange';
    this.cursor = 'pointer';
  }
}
