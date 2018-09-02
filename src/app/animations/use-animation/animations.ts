import { style, animate, keyframes, animation } from '@angular/animations';

export const bounceLeftInAnimation: any = animation(
  animate(
    '1s ease-in',
    keyframes([
      style({
        offset: 0,
        opacity: 0,
        transform: 'translateX(-100px)'
      }),
      style({
        offset: 0.8,
        opacity: 1,
        transform: 'translateX(20px)'
      }),
      style({
        offset: 1,
        transform: 'translateX(0)'
      })
    ])
  )
);

export const bounceLeftOutAnimation: any = animation(
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
);
