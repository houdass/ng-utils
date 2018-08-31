import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingComponent } from './routing.component';
import { RoutingRoutingModule } from './routing-routing.module';
import { ChildComponent } from './child/child.component';
import { AnimationsComponent } from './animations/animations.component';
import { RouteOneComponent } from './animations/route-one/route-one.component';
import { RouteTwoComponent } from './animations/route-two/route-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, RoutingRoutingModule, BrowserAnimationsModule],
  declarations: [RoutingComponent, ChildComponent, AnimationsComponent, RouteOneComponent, RouteTwoComponent]
})
export class RoutingModule {}
