import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appInputHighlight]'
})
export class InputHighlightDirective implements OnInit {
  @Input()
  defaultColor: string;
  @Input()
  highlightColor: string;

  @HostBinding('style.color')
  color: string;

  @HostBinding('style.cursor')
  pointer: string = 'pointer';

  constructor() {}

  ngOnInit(): void {
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseenter(): void {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(): void {
    this.color = this.defaultColor;
  }
}
