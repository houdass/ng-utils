import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  {
    path: 'components',
    component: ComponentsComponent,
    data: { routeId: 3 },
    children: [
      {
        path: 'input',
        component: InputComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
