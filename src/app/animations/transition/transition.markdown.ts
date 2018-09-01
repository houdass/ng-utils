export const markdown: any = {
  transitionTs1: `@Component({
  ...
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(1000))
    ])
  ]
})`,
  transitionTs2: `@Component({
  ...
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *, * => void', animate(1000))
    ])
  ]
})`,
  transitionTs3: `@Component({
  ...
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(1000))
    ])
  ]
})`,
  transitionTs4: `@Component({
  ...
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', animate(1000))
    ])
  ]
})`
};
