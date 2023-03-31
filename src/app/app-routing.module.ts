import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accordion/Overview',
    pathMatch: 'full',
  },
  {
    path: 'sons',
    loadChildren: () => import('./pages/sons/sons.module').then( m => m.SonsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accordion/:path',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
