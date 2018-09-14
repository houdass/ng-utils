import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { title: 'Heroes List' }
  },
  {
    path: 'databinding',
    loadChildren: './databinding/databinding.module#DatabindingModule',
    data: { routeId: 1 }
  },
  {
    path: 'animations',
    loadChildren: './animations/animations.module#AnimationsModule',
    data: { routeId: 7 }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
