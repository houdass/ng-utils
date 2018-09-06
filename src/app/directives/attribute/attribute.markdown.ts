export const markdown: any = {
  stringExp: `<span [ngClass]="'dodgerblue large'">Some text</span>`,
  arrayExp: `<span [ngClass]="['dodgerblue', 'italic']">Some text</span>`,
  objExp: `<span [ngClass]="{dodgerblue: true, large: true, italic: false}">Some Text</span>`,
  stringExpConditional: `<span [ngClass]="{'dodgerblue large italic': true}">Some text</span>`
};
