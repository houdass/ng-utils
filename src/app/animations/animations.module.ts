import { NgModule } from '@angular/core';
import { AnimationsComponent } from './animations.component';
import { SharedModule } from '../shared/shared.module';
import { AnimationsRoutingModule } from './animations-routing.module';
import { CommonModule } from '@angular/common';
import { TriggerComponent } from './trigger/trigger.component';

@NgModule({
  imports: [AnimationsRoutingModule, SharedModule, CommonModule],
  declarations: [AnimationsComponent, TriggerComponent]
})
export class AnimationsModule {}
