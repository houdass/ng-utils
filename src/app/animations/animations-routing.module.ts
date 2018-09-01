import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations.component';
import { TriggerComponent } from './trigger/trigger.component';
import { StateComponent } from './state/state.component';
import { TransitionComponent } from './transition/transition.component';
import { EasingComponent } from './easing/easing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

const animationsRoutes: Routes = [
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
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(animationsRoutes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {}
