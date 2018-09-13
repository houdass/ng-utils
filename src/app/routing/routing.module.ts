import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [CommonModule, RoutingRoutingModule],
  declarations: [RoutingComponent, ChildComponent]
})
export class RoutingModule {}
