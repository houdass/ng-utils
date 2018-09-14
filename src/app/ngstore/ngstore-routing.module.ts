import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgstoreComponent } from './ngstore.component';

const storeRoutes: Routes = [
  {
    path: 'ngstore',
    component: NgstoreComponent,
    data: { routeId: 8 }
  }
];
@NgModule({
  imports: [RouterModule.forChild(storeRoutes)],
  exports: [RouterModule]
})
export class NgstoreRoutingModule {}
