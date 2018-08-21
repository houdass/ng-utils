import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        redirectTo: '404'
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ])
  ],
  declarations: [NotFoundComponent],
  exports: [RouterModule]
})
export class WildcardRoutingModule {}
