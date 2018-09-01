export const markdown: any = {
  hostbinding: `@HostBinding('style.color')
 color: string = 'darkcyan';`,
  hostlistener: `@HostListener('mouseenter')
mouseenter(eventData: Event): void {
  this.color = 'crimson';
}

@HostListener('mouseleave')
mouseleave(eventData: Event): void {
  this.color = 'darkcyan';
}`
};
