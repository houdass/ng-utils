import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appElementRefHighlight]'
})
export class ElementRefHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.color = 'dodgerblue';
    this.elRef.nativeElement.style.cursor = 'pointer';
  }
}
