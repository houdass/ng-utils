import { trigger, animate, style, group, query, transition, AnimationTriggerMetadata } from '@angular/animations';

/* export const fade = trigger('fade', [
   state('void', style({ opacity: 0 })),

   transition('void <=> *', [animate(2000)])
]); */

export const routerTransition: AnimationTriggerMetadata = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(
        ':enter',
        [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ],
        { optional: true }
      )
    ])
  ])
]);
