export const markdown: any = {
  rendererConstructor: `constructor(private elRef: ElementRef, private renderer: Renderer2)`,
  setValue: `this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');`
};
