import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './firebase.component';

const firebaseRoutes: Routes = [
  {
    path: 'firebase',
    component: FirebaseComponent,
    data: { routeId: 4 }
  }
];
@NgModule({
  imports: [RouterModule.forChild(firebaseRoutes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule {}
