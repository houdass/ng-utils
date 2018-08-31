import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const formsRoutes: Routes = [
  {
    path: 'forms',
    component: FormsComponent,
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
  imports: [RouterModule.forChild(formsRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
