import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { RendererComponent } from './renderer/renderer.component';
import { HostbindingComponent } from './hostbinding/hostbinding.component';
import { HostlistenerComponent } from './hostlistener/hostlistener.component';
import { InputComponent } from './input/input.component';

const directivesRoutes: Routes = [
  {
    path: 'directives',
    component: DirectivesComponent,
    children: [
      {
        path: 'structural',
        component: StructuralComponent
      },
      {
        path: 'attribute',
        component: AttributeComponent
      },
      {
        path: 'element-ref',
        component: ElementRefComponent
      },
      {
        path: 'renderer',
        component: RendererComponent
      },
      {
        path: 'hostbinding',
        component: HostbindingComponent
      },
      {
        path: 'hostlistener',
        component: HostlistenerComponent
      },
      {
        path: 'input',
        component: InputComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(directivesRoutes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {}
