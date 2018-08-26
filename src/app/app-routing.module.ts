import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './home/home.guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full'
  },
  {
    path: 'databinding',
    loadChildren: './databinding/databinding.module#DatabindingModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/* {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeGuard],
    canActivateChild: [ItemGuard],
    children: [
      {
        path: 'item', component: ItemComponent
      }
    ]
  } */
