import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './databinding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

const routes: Routes = [
  {
    path: '',
    component: DatabindingComponent,
    children: [
      {
        path: 'string-interpolation',
        component: StringInterpolationComponent
      },
      {
        path: 'property-binding',
        component: PropertyBindingComponent
      },
      {
        path: 'event-binding',
        component: EventBindingComponent
      },
      {
        path: 'twoway-binding',
        component: TwowayBindingComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabindingRoutingModule {}
