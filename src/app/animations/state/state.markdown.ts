export const markdown: any = {
  stateTs: `@Component({
  ...
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(1000))
    ])
  ]
})`,
  stateHtml: `<button type="button" @fade>Save</button>`
};
