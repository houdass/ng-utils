export const markdown: any = {
  hostbinding: `@HostBinding('style.color')
 color: string = 'darkcyan';`,
  hostlistener: `@HostListener('mouseenter')
mouseenter(): void {
  this.color = 'crimson';
}

@HostListener('mouseleave')
mouseleave(): void {
  this.color = 'darkcyan';
}`
};
