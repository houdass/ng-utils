import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingRoutingModule } from './databinding-routing.module';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { DatabindingComponent } from './databinding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';

@NgModule({
  imports: [CommonModule, DatabindingRoutingModule],
  declarations: [
    DatabindingComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent
  ]
})
export class DatabindingModule {}
