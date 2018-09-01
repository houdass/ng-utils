import { trigger, style, transition, animate, state, AnimationTriggerMetadata, keyframes } from '@angular/animations';

export const bounceLeft: AnimationTriggerMetadata = trigger('bounceLeft', [
  transition(':enter', [
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
  ]),
  transition(':leave', [
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
  ])
]);
