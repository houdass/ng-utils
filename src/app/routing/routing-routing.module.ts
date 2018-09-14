import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing.component';
import { RoutingGuard } from './routing.guard';
import { ChildGuard } from './child/child.guard';
import { ChildComponent } from './child/child.component';

const routingRoutes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    data: { routeId: 5 },
    canActivate: [RoutingGuard],
    canActivateChild: [ChildGuard],
    children: [
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routingRoutes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule {}
