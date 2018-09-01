import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(this.elRef.nativeElement, 'color', 'gold');
    renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
  }
}
