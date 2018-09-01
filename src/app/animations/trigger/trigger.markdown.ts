export const markdown: any = {
  triggerTs: `@Component({
  ...
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(1000)]),
      transition('* => void', [animate(1000), style({ opacity: 0 })])
    ])
  ]
})`,
  triggerHtml: `<button type="button" @fade>Save</button>`
};
