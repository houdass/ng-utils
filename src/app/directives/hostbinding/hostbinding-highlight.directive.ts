import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostbindingHighlight]'
})
export class HostbindingHighlightDirective implements OnInit {
  @HostBinding('style.color')
  color: string;
  @HostBinding('style.cursor')
  cursor: string;
  constructor() {}

  ngOnInit() {
    this.color = '#ff7f50';
    this.cursor = 'pointer';
  }
}
