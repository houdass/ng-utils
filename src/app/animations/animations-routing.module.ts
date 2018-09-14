import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations.component';
import { TriggerComponent } from './trigger/trigger.component';
import { StateComponent } from './state/state.component';
import { TransitionComponent } from './transition/transition.component';
import { EasingComponent } from './easing/easing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { UseAnimationComponent } from './use-animation/use-animation.component';

const routes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    children: [
      {
        path: 'trigger',
        component: TriggerComponent
      },
      {
        path: 'state',
        component: StateComponent
      },
      {
        path: 'transition',
        component: TransitionComponent
      },
      {
        path: 'easing',
        component: EasingComponent
      },
      {
        path: 'keyframes',
        component: KeyframesComponent
      },
      {
        path: 'use-animation',
        component: UseAnimationComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {}
