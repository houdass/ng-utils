import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgstoreComponent } from './ngstore.component';

const storeRoutes: Routes = [
  {
    path: 'ngstore',
    component: NgstoreComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(storeRoutes)],
  exports: [RouterModule]
})
export class NgstoreRoutingModule {}
