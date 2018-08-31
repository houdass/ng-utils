import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations.component';
import { TriggerComponent } from './trigger/trigger.component';

const animationsRoutes: Routes = [
  {
    path: '',
    component: AnimationsComponent,
    children: [
      {
        path: 'trigger',
        component: TriggerComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(animationsRoutes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {}
