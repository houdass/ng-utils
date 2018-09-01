import { trigger, style, transition, animate, state, AnimationTriggerMetadata } from '@angular/animations';

export let fade: AnimationTriggerMetadata = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', animate('1s cubic-bezier(0,.89,.45,.43)'))
]);
