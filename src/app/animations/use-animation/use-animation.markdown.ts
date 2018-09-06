export const markdown: any = {
  keyframesTs: `transition(':leave', [
    animate(
      '1s ease-out',
      keyframes([
        style({
          offset: 0.2,
          opacity: 1,
          transform: 'translateX(20px)'
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translateX(-100px)'
        })
      ])
    )
  ])`
};
