import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule, ComponentsRoutingModule],
  declarations: [ComponentsComponent, InputComponent]
})
export class ComponentsModule {}
