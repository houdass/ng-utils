import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { InputComponent } from './input/input.component';

const componentsRoutes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'input',
        component: InputComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
