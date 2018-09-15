export const markdown: any = {
  inputHtml: `<li appInputHighlight defaultColor="darkcyan" highlightColor="yellow">Ceci est un exemple</li>`,
  inputTs: `@Input()
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
}`
};
