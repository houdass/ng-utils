import { NgModule } from '@angular/core';
import { AnimationsComponent } from './animations.component';
import { SharedModule } from '../shared/shared.module';
import { AnimationsRoutingModule } from './animations-routing.module';
import { CommonModule } from '@angular/common';
import { TriggerComponent } from './trigger/trigger.component';
import { StateComponent } from './state/state.component';
import { TransitionComponent } from './transition/transition.component';
import { EasingComponent } from './easing/easing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';

@NgModule({
  imports: [AnimationsRoutingModule, SharedModule, CommonModule],
  declarations: [
    AnimationsComponent,
    TriggerComponent,
    StateComponent,
    TransitionComponent,
    EasingComponent,
    KeyframesComponent
  ]
})
export class AnimationsModule {}
