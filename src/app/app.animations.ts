import { trigger, animate, style, group, query, transition, state } from '@angular/animations';

export const fade: any = trigger('fade', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })]),
    query(':enter', [style({ opacity: 0 }), animate('0.5s', style({ opacity: 1 }))])
  ])
]);
export const routerTransition: any = trigger('routerTransition', [
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

export const animRoutes: any = trigger('animRoutes', [
  transition(':decrement', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))],
        { optional: true }
      )
    ])
  ]),
  transition(':increment', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
