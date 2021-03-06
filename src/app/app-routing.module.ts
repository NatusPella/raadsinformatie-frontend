import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'events/show',
    loadChildren: () => import('./events/show/show.module').then(m => m.ShowPageModule)
  },
  {
    path: 'events/create',
    loadChildren: () => import('./events/create/create.module').then(m => m.CreatePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
