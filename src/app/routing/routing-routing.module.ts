import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { RoutingGuard } from './routing.guard';
import { ChildGuard } from './child/child.guard';
import { ChildComponent } from './child/child.component';
import { AnimationsComponent } from './animations/animations.component';
import { RouteOneComponent } from './animations/route-one/route-one.component';
import { RouteTwoComponent } from './animations/route-two/route-two.component';

const routingRoutes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    canActivate: [RoutingGuard],
    canActivateChild: [ChildGuard],
    children: [
      {
        path: 'child',
        component: ChildComponent
      },
      {
        path: 'animations',
        component: AnimationsComponent,
        children: [
          {
            path: 'route-one',
            component: RouteOneComponent,
            data: { state: 'route-one' }
          },
          {
            path: 'route-two',
            component: RouteTwoComponent,
            data: { state: 'route-two' }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routingRoutes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {}
