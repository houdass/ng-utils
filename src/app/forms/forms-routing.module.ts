import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent,
    data: { routeId: 6 },
    children: [
      {
        path: 'template-driven',
        component: TemplateDrivenComponent
      },
      {
        path: 'reactive',
        component: ReactiveComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
