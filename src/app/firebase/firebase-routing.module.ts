import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './firebase.component';

const routes: Routes = [
  {
    path: 'firebase',
    component: FirebaseComponent,
    data: { routeId: 4 }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule {}
